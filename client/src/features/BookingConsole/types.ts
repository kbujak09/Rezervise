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

export interface DayScheduleInterface {
  id: number,
  dayOfWeek: number,
  startTime: string,
  endTime: string,
}

export interface AppointmentInterface {
  id: string,
  start: Date,
  end: Date,
  status: "CONFIRMED" | "CANCELLED" | "DONE",
  clientName: string,
  clientPhone: string,
  clientEmail: string | null,
  serviceId: number,
  service: ServiceInterface,
  businessId: number,
  createdAt: Date,
}