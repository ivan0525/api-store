import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { BingService } from './bing.service';

@Controller('/bing')
export class BingController {
  constructor(private readonly bingService: BingService) {}
  @Get()
  @Header(
    'accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
  )
  @Header('Content-Type', 'image/jpeg')
  async getEveryDayImage() {
    const imageData = await this.bingService.getEveryDayImage();
    return new StreamableFile(imageData);
  }
}
