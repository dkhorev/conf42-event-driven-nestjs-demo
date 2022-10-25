import { NestFactory } from '@nestjs/core';
import { CronModule } from './cron/cron.module';
import { MonitorModule } from './monitor/monitor.module';
import { WorkersModule } from './workers/workers.module';

export const rolesMapBootstrap = {
  cron: async () => {
    return await NestFactory.createApplicationContext(CronModule);
  },
  worker: async () => {
    return await NestFactory.createApplicationContext(WorkersModule);
  },
  monitor: async () => {
    return await NestFactory.createApplicationContext(MonitorModule);
  },
};
