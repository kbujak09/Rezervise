import { Request, Response } from 'express';

import * as appointmentService from '../services/appointmentService';

export const createAppointment =  async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = req.body;

    const appointment = await appointmentService.createNewAppointment(data);

    res.status(201).json(appointment);
  }
  catch (err: any) {
    console.error('Błąd podczas tworzenia rezerwacji', err);

    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}

export const getAvailableSlots = async (req: Request, res: Response): Promise<void> => {
  try {
    const { serviceId, businessId } = req.query;

    const availableSlots = await appointmentService.getAvailableSlots(Number(serviceId), Number(businessId));

    res.status(200).json(availableSlots);
  }
  catch (err: any) {
    console.error('Błąd podczas pobierania wolnych terminów.\n', err);

    if (err.message === 'BUSINESS_NOT_FOUND') {
      res.status(400).json({ error: 'Nie znaleziono biznesu od podanym ID.' });
      return;
    }

    res.status(500).json({ error: 'Wystąpił błąd po stronie serwera.' });
  }
}