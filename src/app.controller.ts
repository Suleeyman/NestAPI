import { Controller, Get, Param } from '@nestjs/common';
import { HelloMessage } from './HelloMessage';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:name')
  getHello(@Param('name') name: string): HelloMessage {
    return this.appService.getHello(name);
  }
}
