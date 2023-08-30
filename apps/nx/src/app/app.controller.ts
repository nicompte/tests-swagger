import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { ApiBody } from '@nestjs/swagger';
import { Toto } from './toto.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   *
   * Get some data
   * @param id The id
   */
  @Post()
  getData(@Body() toto: Toto, @Param('id') id: string) {
    return this.appService.getData();
  }
}
