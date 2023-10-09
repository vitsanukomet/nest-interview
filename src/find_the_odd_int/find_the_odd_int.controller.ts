import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FindTheOddIntService } from './find_the_odd_int.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('find-the-odd-int')
export class FindTheOddIntController {
  constructor(private findtheOdd: FindTheOddIntService) {}

  @Post('count')
  @ApiBody({
    description: 'Array of numbers',
    type: [Number],
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the odd number from the given array.',
    type: Number,
  })
  @HttpCode(200)
  calStrings(@Body('data') inputArray: number[]): number {
    return this.findtheOdd.findOddInt(inputArray);
  }
}
