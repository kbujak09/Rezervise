import { Request, Response } from 'express';

import * as businessService from '../services/business.service';

export const createBusiness = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = req.body;

    const business = await businessService.createNewBusiness(data);

    res.status(201).json(business);
  }
  catch (err: any) {
    console.error('Błąd podczas tworzenia biznesu.\n', err);
    
    if (err.message === 'MISSING_DATA') {
      res.status(400).json({ error: 'Nieprawidłowe dane.' });
      return;
    }
    
    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}

export const getBusinessById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { businessId } = req.params;

    const business = await businessService.fetchBusinessById(Number(businessId));

    res.status(200).json(business);
  }
  catch (err: any) {
    console.error('Błąd podczas pobierania danych.\n', err);

    if (err.message === 'INVALID_ID') {
      res.status(400).json({ error: 'Nieprawidłowe ID firmy.' });
      return;
    }
    
    if (err.message === 'NOT_FOUND') {
      res.status(404).json({ error: 'Nie znaleziono firmy o podanym ID.'});
      return;
    }

    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}

export const getAllBusinesses = async (req: Request, res: Response): Promise<void> => {
  try {
    const allBusinesses = await businessService.fetchAllBusinesses();

    res.status(200).json(allBusinesses);
  }
  catch (err: any) {
    console.error('Błąd podczas pobierania danych.\n', err);

    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}

export const getBusinessBySlug = async (req: Request, res: Response): Promise<void> => {
  try {
    const { slug } = req.params;

    const business = await businessService.fetchBusinessBySlug(slug as string);

    res.status(200).json(business);
  }
  catch (err: any) {
    console.error('Błąd podczas pobierania danych.\n', err);

    if (err.message === 'INVALID_SLUG') {
      res.status(400).json({ error: 'Nieprawidłowy identyfikator.' });
      return;
    }
    
    if (err.message === 'NOT_FOUND') {
      res.status(404).json({ error: 'Nie znaleziono firmy o podanym identyfikatorze.'});
      return;
    }

    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}