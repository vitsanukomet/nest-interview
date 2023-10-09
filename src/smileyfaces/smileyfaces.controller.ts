import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SmileyfacesService } from './smileyfaces.service';

@Controller('smileyfaces')
export class SmileyfacesController {
  constructor(private smileyfaceCount: SmileyfacesService) {}

  @Post('count')
  @HttpCode(200)
  calStrings(@Body('data') inputArray: string[]): number {
    return this.smileyfaceCount.countSmileyfaces(inputArray);
  }
}
