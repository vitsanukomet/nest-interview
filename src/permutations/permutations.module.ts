import { Module } from '@nestjs/common';
import { PermutationsController } from './permutations.controller';
import { PermutationsService } from './permutations.service';

@Module({
  controllers: [PermutationsController],
  providers: [PermutationsService],
})
export class PermutationsModule {}
