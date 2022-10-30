import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { randomUUID } from 'crypto';
import Redis from 'ioredis';

@Injectable()
export class KeepAliveService {
  private readonly uuid = randomUUID();
  private readonly redis: Redis;

  constructor(private readonly config: ConfigService) {
    this.redis = new Redis({
      host: config.get('REDIS_HOST') || '127.0.0.1',
      port: this.config.get('REDIS_PORT') || 6379,
      password: config.get('REDIS_PASSWORD') || undefined,
      db: 2,
    });
  }

  @Cron(CronExpression.EVERY_SECOND)
  keepAlive() {
    this.redis.zadd('workers-trade:timestamps', Date.now(), this.uuid);
  }
}
