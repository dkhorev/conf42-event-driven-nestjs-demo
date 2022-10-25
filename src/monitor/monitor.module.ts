import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../common/common.module';
import { MonitorService } from './monitor.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [MonitorService],
})
export class MonitorModule {}
