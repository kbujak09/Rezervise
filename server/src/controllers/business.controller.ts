import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getBusinessBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    if (!slug || typeof slug !== 'string') {
      res.status(400).json({ error: 'Nieprawidłowy identyfikator.' });
      return
    }

    const business = await prisma.business.findUnique({
      where: { slug },
      include: {
        services: true,
        workingHours: true,
      },
    });

    if (!business) {
      res.status(404).json({ error: 'Nie znaleziono firmy o podanym identyfikatorze.'});
      return;
    }

    res.json(business);
  }
  catch (err) {
    console.error('Błąd podczas pobierania danych firmy:', err);
    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.'});
  }
}