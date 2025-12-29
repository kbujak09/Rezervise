import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createBusinessDto: CreateBusinessDto) {
    return this.prisma.business.create({
      data: {
        ...createBusinessDto,
        slug: createBusinessDto.name
          .toLowerCase()
          .replace(/ /g, '-')
          .replace(/[^\w-]+/g, ''),
      },
    });
  }

  findAll() {
    return this.prisma.business.findMany();
  }

  findOne(id: number) {
    return this.prisma.business.findUnique({
      where: { id },
      include: {
        services: true
      }
    });
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: number) {
    return `This action removes a #${id} business`;
  }
}
