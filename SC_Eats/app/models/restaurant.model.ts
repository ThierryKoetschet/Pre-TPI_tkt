export interface RestaurantModel {
  id: number
  name: string
  address: string
  city: string
  zipcode: number
  image: string
  url: string
  category: string
  details: {
    title: string
    body: string
  }[]
}
