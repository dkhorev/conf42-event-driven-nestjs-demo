import { NestFactory } from '@nestjs/core';
import { CronModule } from './stacks/default/cron/cron.module';
import { CronModuleStep1 } from './stacks/diff-queues/cron/cron.module';
import { DefaultWorkersModuleStep2 } from './stacks/diff-queues/default-worker/workers.module';
import { TradeWorkersModuleStep2 } from './stacks/diff-queues/trade-worker/workers.module';
import { WorkersModuleStep1 } from './stacks/diff-queues/workers/workers.module';
import { MonitorModule } from './monitor/monitor.module';
import { WorkersModule } from './stacks/default/workers/workers.module';
import { CronModuleIssue1 } from './stacks/issue1/cron/cron.module';

export const rolesMapBootstrap = {
  monitor: async () => {
    return await NestFactory.createApplicationContext(MonitorModule);
  },

  // default stack
  cron: async () => {
    return await NestFactory.createApplicationContext(CronModule);
  },
  worker: async () => {
    return await NestFactory.createApplicationContext(WorkersModule);
  },

  // issue 1: increased traffic
  cron_issue1: async () => {
    return await NestFactory.createApplicationContext(CronModuleIssue1);
  },

  // step 1 upgrade
  cron_1: async () => {
    return await NestFactory.createApplicationContext(CronModuleStep1);
  },
  worker_1: async () => {
    return await NestFactory.createApplicationContext(WorkersModuleStep1);
  },

  // step 2 upgrade
  worker_default: async () => {
    return await NestFactory.createApplicationContext(
      DefaultWorkersModuleStep2,
    );
  },
  worker_trade: async () => {
    return await NestFactory.createApplicationContext(TradeWorkersModuleStep2);
  },
};
