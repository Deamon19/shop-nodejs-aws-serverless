import { ProductInterface } from './productsDTO'
import { v4 as uuidv4 } from 'uuid';
const AWS = require('aws-sdk')
import { productsMock } from './productsList';
import { SQSEvent } from "aws-lambda";
import { SNS } from 'aws-sdk'

export const getProductById = async (id: string): Promise<ProductInterface | undefined> => {
  const documentClient = new AWS.DynamoDB.DocumentClient()
  const productParams: any = {}
  const stockParams: any = {}
  productParams.TableName = process.env.DYNAMODB_PRODUCTS_TABLE
  const productKey = { id: id }
  const stockKey = { product_id: id }
  productParams.Key = productKey
  stockParams.TableName = process.env.DYNAMODB_STOCKS_TABLE
  stockParams.Key = stockKey
  const productData = await documentClient.get(productParams).promise()
  const stockData = await documentClient.get(stockParams).promise()
  return {
      id: productData.Item.id,
      title: productData.Item.title,
      description: productData.Item.description,
      price: productData.Item.price,
      count: stockData.Item.count
  }
}

export const getAllProducts = async (): Promise<ProductInterface[]> => {
  const ProductScanParams = {
    TableName: process.env.DYNAMODB_PRODUCTS_TABLE
  }
  const StockScanParams = {
    TableName: process.env.DYNAMODB_STOCKS_TABLE
  }
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const products = await dynamodb.scan(ProductScanParams).promise()
  const stocks = await dynamodb.scan(StockScanParams).promise()
  let merged = []
  for (let i = 0; i < products.Items.length; i++) {
    merged.push({
      ...products.Items[i],
      ...stocks.Items.find((itmInner) => itmInner.product_id === products.Items[i].id)
    })
  }

  if (products.Count === 0) {
    return undefined
  }
  if (stocks.Count === 0) {
    return undefined
  }

  return merged.map((product) => {
        return {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          count: product.count
        }
      })
}

export const createProduct = async (product: Pick<ProductInterface, 'title' | 'description' | 'price' | 'count'>) => {
  const id = uuidv4()
  const dynamoDb = new AWS.DynamoDB.DocumentClient()
  const productParams = {
    TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
    Item: {
      id: id,
      title: product.title,
      description: product.description,
      price: product.price
    }
  }
  const stockParams = {
    TableName: process.env.DYNAMODB_STOCKS_TABLE,
    Item: {
      product_id: id,
      count: product.count
    }
  }
  await dynamoDb.put(productParams).promise()
  await dynamoDb.put(stockParams).promise()
  return {product: productParams.Item, stock: stockParams.Item};
}

export const mockProducts = async () => {
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const { Items } = await dynamodb
  .scan({
    TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
  })
  .promise();

  if (Items.length > 0) {
    await Promise.all(
      Items.map(async (product: ProductInterface) => {
        await dynamodb
          .delete({
            TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
            Key: { id: product.id },
          })
          .promise();

        await dynamodb
          .delete({
            TableName: process.env.DYNAMODB_STOCKS_TABLE,
            Key: { product_id: product.id },
          })
          .promise();
      })
    );
  }
  const res = await Promise.all(productsMock.map((async product => await createProduct(product))))
  return res
}

export const catalogBatchProcess = async (event: SQSEvent) => {
    const sns = new SNS({ region: 'eu-west-3' })
    const products: ProductInterface[] = JSON.parse(event.Records[0].body)
    for (const product of products){
      const id = uuidv4()
      const dynamoDb = new AWS.DynamoDB.DocumentClient()
      const productParams = {
        TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
        Item: {
          id: id,
          title: product.title,
          description: product.description,
          price: product.price
        }
      }
      const stockParams = {
        TableName: process.env.DYNAMODB_STOCKS_TABLE,
        Item: {
          product_id: id,
          count: product.count
        }
      }
      await dynamoDb.put(productParams).promise()
      await dynamoDb.put(stockParams).promise()
    }

    await sns.publish({
        Subject: 'Product',
        Message: 'Created',
        TopicArn: process.env.CREATE_PRODUCT_SNS_TOPIC_ARN
    }, () => {
        console.log('Email sent', JSON.stringify(products))
    }).promise()
}