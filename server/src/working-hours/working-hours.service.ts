import { Injectable } from '@nestjs/common';
import { CreateWorkingHourDto } from './dto/create-working-hour.dto';
import { UpdateWorkingHourDto } from './dto/update-working-hour.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkingHoursService {
  constructor(private prisma: PrismaService) { }

  async create(createWorkingHoursDto: CreateWorkingHourDto) {
    return this.prisma.workingHours.create({
      data: createWorkingHoursDto
    });
  }

  findAll() {
    return `This action returns all workingHours`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workingHour`;
  }

  update(id: number, updateWorkingHourDto: UpdateWorkingHourDto) {
    return `This action updates a #${id} workingHour`;
  }

  remove(id: number) {
    return `This action removes a #${id} workingHour`;
  }
}
