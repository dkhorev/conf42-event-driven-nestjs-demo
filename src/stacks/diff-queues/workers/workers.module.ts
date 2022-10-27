import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../../common/common.module';
import { DefaultService } from './default.service';
import { KeepAliveService } from './keep-alive.service';
import { TradesService } from './trades.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [DefaultService, KeepAliveService, TradesService],
})
export class WorkersModuleStep1 {}
