import { InjectQueue } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Queue } from 'bull';
import { randomUUID } from 'crypto';
import {
  JOB_NAME_ANALYTICS,
  JOB_NAME_NOTIFICATION,
  JOB_NAME_STORE,
  JOB_NAME_TRADE_CONFIRM,
  QUEUE_DEFAULT,
} from '../common/const';

@Injectable()
export class CronService {
  protected readonly logger = new Logger(this.constructor.name);

  constructor(@InjectQueue(QUEUE_DEFAULT) private queue: Queue) {}

  @Cron(CronExpression.EVERY_SECOND)
  async generate() {
    const uuid = randomUUID();
    this.queue.add(JOB_NAME_ANALYTICS, { uuid });
    this.queue.add(JOB_NAME_NOTIFICATION, { uuid });
    this.queue.add(JOB_NAME_STORE, { uuid });
    this.queue.add(JOB_NAME_TRADE_CONFIRM, { uuid });
  }
}
