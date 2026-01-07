import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessModule } from './business/business.module';
import { ServiceModule } from './service/service.module';
import { WorkingHoursModule } from './working-hours/working-hours.module';
import { AppointmentModule } from './appointment/appointment.module';

@Module({
  imports: [
    BusinessModule,
    ServiceModule,
    WorkingHoursModule,
    AppointmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
