import { Module } from '@nestjs/common';
import { SmileyfacesController } from './smileyfaces.controller';
import { SmileyfacesService } from './smileyfaces.service';

@Module({
  controllers: [SmileyfacesController],
  providers: [SmileyfacesService],
})
export class SmileyfacesModule {}
