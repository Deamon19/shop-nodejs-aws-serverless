import { ProductInterface } from './productsDTO'
import { productsMock } from './productsList'

export const getProductById = async (id: string): Promise<ProductInterface | undefined> => {
  return productsMock.find((product) => product.id === id)
}

export const getAllProducts = async (): Promise<ProductInterface[]> => {
  return productsMock
}
