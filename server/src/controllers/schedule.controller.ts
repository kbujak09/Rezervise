import { Request, Response } from 'express';

import * as scheduleService from '../services/schedule.service';

export const createSchedule = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = req.body;

    const schedule = await scheduleService.createNewSchedule(data);

    res.status(201).json(schedule);
  }
  catch (err: any) {
    console.error('Błąd podczas tworzenia harmonogramu.\n', err);
  }
}