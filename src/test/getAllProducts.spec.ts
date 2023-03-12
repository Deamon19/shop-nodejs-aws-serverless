import * as productService from '../services/productService'
import { productsMock } from '../services/productsList'
import { getAllProductsHandler } from '../getAllProducts'
import * as successResponse from '../utils/apiResponseBuilder'

describe('Get all location service test', () => {
  let getAllProductsMock, successResponseMock
  beforeEach(() => {
    getAllProductsMock = jest.spyOn(productService, 'getAllProducts')
    successResponseMock = jest.spyOn(successResponse, 'successResponse')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.resetAllMocks()
  })

  it('Should get all products and call successResponce with it', async () => {

    await getAllProductsHandler('', '')

    expect(successResponseMock).toHaveBeenCalledWith(productsMock)
  })

  it('Should call get all products service', async () => {

    await getAllProductsHandler('', '')

    expect(getAllProductsMock).toHaveBeenCalled()
  })
})
