import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BingModule } from './bing/bing.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HttpModule, BingModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
