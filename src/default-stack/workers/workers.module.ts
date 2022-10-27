import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../common/common.module';
import { KeepAliveService } from './keep-alive.service';
import { TradeService } from './trade.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [TradeService, KeepAliveService],
})
export class WorkersModule {}
