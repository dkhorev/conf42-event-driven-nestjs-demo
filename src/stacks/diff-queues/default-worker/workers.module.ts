import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { CommonModule } from '../../../common/common.module';
import { DefaultService } from './default.service';
import { KeepAliveService } from './keep-alive.service';

@Module({
  imports: [CommonModule, ScheduleModule.forRoot()],
  providers: [DefaultService, KeepAliveService],
})
export class DefaultWorkersModuleStep2 {}
