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
  categoryOrder: string[],
  createdAt?: Date,
  updatedAt?: Date 
};

export interface ServiceInterface {
  id: number,
  name: string,
  price: number,
  duration: number,
  businessId: number,
  category: string
}