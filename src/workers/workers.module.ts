import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { TradeService } from './trade.service';

@Module({
  imports: [CommonModule],
  providers: [TradeService],
})
export class WorkersModule {}
