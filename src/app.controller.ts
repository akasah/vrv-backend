import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signup')
  async signup(@Body() data: signup) {
    return await this.appService.createUser(data);
  }

  @Post('login')
  async login(@Body() data: signup) {
    return await this.appService.loginUser(data);
  }
}
