import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createNewAppointment = async (data: any) => {
  if (!data) {
    throw new Error('MISSING_DATA');
  }

  const appointment = await prisma.appointment.create({
    data: {
      start: data.start,
      end: data.end,
      clientName: data.clientName,
      businessId: data.businessId,
      serviceId: data.serviceId
    }
  })

  return appointment;
}

export const getAvailableSlots = async (serviceId: number, businessId: number) => {
  if (!serviceId || !businessId) {  
    throw new Error('MISSING_DATA');
  }

  const business = await prisma.business.findUnique({ where: { id: businessId }});

  if (!business) {
    throw new Error('BUSINESS_NOT_FOUND');
  }

  return business;
}