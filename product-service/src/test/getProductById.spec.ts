import * as productService from '../services/productService'
import { productsMock } from '../services/productsList'
import { getProductByIdHandler } from '../getProductById'
import * as successResponse from '../utils/apiResponseBuilder'

describe('Get all location service test', () => {
  let getProductByIdMock, successResponseMock
  beforeEach(() => {
    getProductByIdMock = jest.spyOn(productService, 'getProductById')
    successResponseMock = jest.spyOn(successResponse, 'successResponse')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('Should find product and call successResponce with it', async () => {

    await getProductByIdHandler({pathParameters: { productId: productsMock[0].id}}, '')

    expect(successResponseMock).toHaveBeenCalledWith({ product: productsMock[0] })
  })

  it('Should not find product and call successResponce with message and 404', async () => {

    await getProductByIdHandler({pathParameters: { productId: 'random id'}}, '')

    expect(successResponseMock).toHaveBeenCalledWith({ message: "Product not found" }, 404)
  })

  it('Should call get product by id service', async () => {

    await getProductByIdHandler({pathParameters: { productId: 'random id'}}, '')

    expect(getProductByIdMock).toHaveBeenCalledWith('random id')
  })
})
