import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { BingController } from './bing/bing.controller';
import { BingService } from './bing/bing.service';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, BingController],
  providers: [AppService, BingService],
})
export class AppModule {}
