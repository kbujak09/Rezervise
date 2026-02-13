export interface BusinessInterface {
  id: number
  name: string
  slug: string,
  description: string,
  address: string,
  city: string,
  phone: string,
  email: string,
  imageUrl?: string,
  createdAt?: Date,
  updatedAt?: Date 
};