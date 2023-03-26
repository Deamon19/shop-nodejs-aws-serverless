const { SNS, DynamoDB } = require('aws-sdk')
const { catalogBatchProcess } = require('../../services/productService')

jest.mock('aws-sdk', () => {
  const mockDynamoDB = {
    put: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  }
  const mockSNS = {
    publish: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  }
  return {
    DynamoDB: {
      DocumentClient: jest.fn(() => mockDynamoDB),
    },
    SNS: jest.fn(() => mockSNS),
  }
})

describe('catalogBatchProcess', () => {
  const products = [
    { title: 'Product 1', description: 'Description for Product 1', price: 10.99, count: 10 },
    { title: 'Product 2', description: 'Description for Product 2', price: 20.99, count: 20 },
  ]
  const event = {
    Records: [
      {
        body: JSON.stringify(products),
      },
    ],
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create products in DynamoDB', async () => {
    await catalogBatchProcess(event)

    const dynamoDB = new DynamoDB.DocumentClient()
    expect(dynamoDB.put.mock.calls).toHaveLength(products.length * 2) // 2 puts per product
    expect(dynamoDB.put.mock.calls[0][0]).toEqual({
      TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
      Item: {
        id: expect.any(String),
        title: 'Product 1',
        description: 'Description for Product 1',
        price: 10.99,
      },
    })
    expect(dynamoDB.put.mock.calls[1][0]).toEqual({
      TableName: process.env.DYNAMODB_STOCKS_TABLE,
      Item: {
        product_id: expect.any(String),
        count: 10,
      },
    })
    expect(dynamoDB.put.mock.calls[2][0]).toEqual({
      TableName: process.env.DYNAMODB_PRODUCTS_TABLE,
      Item: {
        id: expect.any(String),
        title: 'Product 2',
        description: 'Description for Product 2',
        price: 20.99,
      },
    })
    expect(dynamoDB.put.mock.calls[3][0]).toEqual({
      TableName: process.env.DYNAMODB_STOCKS_TABLE,
      Item: {
        product_id: expect.any(String),
        count: 20,
      },
    })
  })

  it('should publish SNS message', async () => {
    await catalogBatchProcess(event)

    const sns = new SNS()
    expect(sns.publish.mock.calls).toHaveLength(1)
    expect(sns.publish.mock.calls[0][0]).toEqual({
      Subject: 'Product',
      Message: 'Created',
      TopicArn: process.env.CREATE_PRODUCT_SNS_TOPIC_ARN,
    })
    expect(sns.publish.mock.calls[0][1]).toEqual(expect.any(Function))
  })
})