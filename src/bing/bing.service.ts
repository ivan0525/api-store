import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class BingService {
  constructor(private readonly httpService: HttpService) {}
  private static baseUrl = 'https://cn.bing.com';

  async getEveryDayImage() {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
        )
        .pipe(
          catchError(() => {
            throw 'An error happened!';
          }),
        ),
    );
    const { data: imageData } = await firstValueFrom(
      this.httpService.get(`${BingService.baseUrl}${data.images[0].url}`, {
        responseType: 'arraybuffer',
      }),
    );
    return imageData;
  }
}
