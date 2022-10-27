import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../../common/common.module';
import { CronService } from './cron.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [CronService],
})
export class CronModule {}
