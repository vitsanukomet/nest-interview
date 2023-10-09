import { Module } from '@nestjs/common';
import { PermutationsModule } from './permutations/permutations.module';
import { SmileyfacesModule } from './smileyfaces/smileyfaces.module';
import { FindTheOddIntModule } from './find_the_odd_int/find_the_odd_int.module';

@Module({
  imports: [PermutationsModule, SmileyfacesModule, FindTheOddIntModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
