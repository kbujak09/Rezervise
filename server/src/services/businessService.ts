import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const createNewBusiness = async (data: any) => {
  if (!data) {
      throw new Error('MISSING_DATA');
    }

    const business = await prisma.business.create({
      data: {
        name: data.name,
        slug: data.slug,
        description: data.description,
        address: data.address,
        city: data.city,
        phone: data.phone,
        email: data.email,
        imageUrl: data.imageUrl,
      },
      include: {
        services: true,
        schedules: true,
        appointments: true,
      }
    });

    return business;
}

export const fetchBusinessBySlug = async (slug: string) => {
  if (!slug) {
    throw new Error('INVALID_SLUG');
  }

  const business = await prisma.business.findUnique({
    where: { slug },
    include: {
      services: true,
      workingHours: true,
    },
  });

  if (!business) {
    throw new Error('NOT_FOUND');
  }
}