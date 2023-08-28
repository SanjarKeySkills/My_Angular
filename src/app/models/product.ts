export interface IProduct {
  id?: number
  title: string
  price: number
  currency: string
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
