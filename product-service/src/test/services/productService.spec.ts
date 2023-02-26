import * as productService from '../../services/productService'
import { productsMock } from '../../services/productsList'


describe('Get all location service test', () => {

  it('Should find product by id', async () => {

    const res = await productService.getProductById(productsMock[0].id)

    expect(res).toEqual(productsMock[0])
  })

  it('Should not find product and return undefined', async () => {

    const res = await productService.getProductById('not found id')

    expect(res).toEqual(undefined)
  })

  it('Should return all products', async () => {

    const res = await productService.getAllProducts()

    expect(res).toEqual(productsMock)
  })
})
