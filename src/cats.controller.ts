

import { Controller, Get, Req, Post, HttpCode, Query, Redirect, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
        return 'This action adds a new cat';
    }
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}



@Get(':id')
findOne(@Param('id') id: string): string {
  return `This action returns a #${id} cat`;
}


}

