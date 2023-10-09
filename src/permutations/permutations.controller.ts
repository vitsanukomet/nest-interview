import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { PermutationsService } from './permutations.service';

@Controller('permutations')
export class PermutationsController {
  constructor(private permutationStrings: PermutationsService) {}

  @Post('concatenate')
  @HttpCode(200)
  calStrings(@Body('data') inputStrings: string): string[] {
    return this.permutationStrings.calPermutations(inputStrings);
  }
}
