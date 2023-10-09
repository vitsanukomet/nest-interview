import { Injectable } from '@nestjs/common';

@Injectable()
export class SmileyfacesService {
  private readonly smileyPattern = /[:;][-~]?[)D]/;

  countSmileyfaces(arr: string[]): number {
    return arr.reduce(
      (count, face) => (this.smileyPattern.test(face) ? count + 1 : count),
      0,
    );
  }
}
