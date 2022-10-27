import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bull';
import { randomUUID } from 'crypto';
import {
  JOB_ANALYTICS,
  JOB_NOTIFICATION,
  JOB_STORE,
  JOB_TRADE_CONFIRM,
  QUEUE_DEFAULT,
  QUEUE_TRADES,
} from '../../../common/const';

@Injectable()
export class CronService {
  protected readonly logger = new Logger(this.constructor.name);
  private readonly tradesPercycle: number;

  constructor(
    @InjectQueue(QUEUE_DEFAULT) private queue: Queue,
    @InjectQueue(QUEUE_TRADES) private queueTrades: Queue,
  ) {
    this.tradesPercycle = 3;
  }

  @Cron(CronExpression.EVERY_SECOND)
  async generate() {
    for (let i = 0; i < this.tradesPercycle; i++) {
      const uuid = randomUUID();
      this.queue.add(JOB_ANALYTICS, { uuid });
      this.queue.add(JOB_NOTIFICATION, { uuid });
      this.queue.add(JOB_STORE, { uuid });
      this.queueTrades.add(JOB_TRADE_CONFIRM, { uuid });
      this.logger.log(`Trade ${uuid} created`);
    }
  }
}
