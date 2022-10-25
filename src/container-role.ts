import { NestFactory } from '@nestjs/core';
import { CronModule } from './cron/cron.module';
import { WorkersModule } from './workers/workers.module';

export const rolesMapBootstrap = {
  cron: async () => {
    return await NestFactory.createApplicationContext(CronModule);
  },
  worker: async () => {
    return await NestFactory.createApplicationContext(WorkersModule);
  },
};
