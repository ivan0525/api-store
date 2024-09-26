import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BingModule } from './bing/bing.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [HttpModule, BingModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('user');
  }
}
