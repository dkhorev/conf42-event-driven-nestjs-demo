import { NestFactory } from '@nestjs/core';
import { CronModule } from './default-stack/cron/cron.module';
import { CronModuleStep1 } from './diff-queues-stack/cron/cron.module';
import { WorkersModuleStep1 } from './diff-queues-stack/workers/workers.module';
import { MonitorModule } from './monitor/monitor.module';
import { WorkersModule } from './default-stack/workers/workers.module';

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
  // step 1 upgrade
  cron_1: async () => {
    return await NestFactory.createApplicationContext(CronModuleStep1);
  },
  worker_1: async () => {
    return await NestFactory.createApplicationContext(WorkersModuleStep1);
  },
};
