import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bull';
import { randomUUID } from 'crypto';
import { QUEUE_DEFAULT } from '../common/const';

@Injectable()
export class CronService {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(@InjectQueue(QUEUE_DEFAULT) private queue: Queue) {}

  @Cron(CronExpression.EVERY_SECOND)
  generateTrades() {
    const uuid = randomUUID();
    this.logger.log(`emit trades: ${uuid}`);
    this.queue.add({ uuid });
  }
}
