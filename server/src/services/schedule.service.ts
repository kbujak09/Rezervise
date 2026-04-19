import { PrismaClient, Schedule } from "@prisma/client";

const prisma = new PrismaClient();

export const createNewSchedules = async (scheduleData: Schedule[]) => {
  if (!scheduleData?.length ) {
    throw new Error('MISSING_DATA');
  }

  const schedules = await prisma.schedule.createMany({
    data: scheduleData,
  });

  return schedules;
}