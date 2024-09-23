import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BingController } from './bing.controller';
import { BingService } from './bing.service';

@Module({
  imports: [HttpModule],
  controllers: [BingController],
  providers: [BingService],
  exports: [BingService],
})
export class BingModule {}
