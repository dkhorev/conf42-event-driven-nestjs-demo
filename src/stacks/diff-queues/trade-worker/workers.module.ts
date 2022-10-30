import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../../common/common.module';
import { KeepAliveService } from './keep-alive.service';
import { TradesService } from './trades.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [KeepAliveService, TradesService],
})
export class TradeWorkersModuleStep2 {}
