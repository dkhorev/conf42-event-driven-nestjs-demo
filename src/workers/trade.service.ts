import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { QUEUE_DEFAULT } from '../common/const';
import { TradeCreatedDto } from '../common/dto/trade-created.dto';
import { delay } from '../common/utils/delay';

@Processor(QUEUE_DEFAULT)
export class TradeService {
  protected readonly logger = new Logger(this.constructor.name);

  @Process({ concurrency: 1 })
  async process(job: Job<TradeCreatedDto>) {
    this.logger.log(job.data.uuid);
    job.moveToCompleted().then(async () => {
      await delay(200);
    });
  }
}
