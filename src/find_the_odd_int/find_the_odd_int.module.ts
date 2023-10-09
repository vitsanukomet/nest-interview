import { Module } from '@nestjs/common';
import { FindTheOddIntController } from './find_the_odd_int.controller';
import { FindTheOddIntService } from './find_the_odd_int.service';

@Module({
  controllers: [FindTheOddIntController],
  providers: [FindTheOddIntService]
})
export class FindTheOddIntModule {}
