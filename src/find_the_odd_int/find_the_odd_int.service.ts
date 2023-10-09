import { Injectable } from '@nestjs/common';

@Injectable()
export class FindTheOddIntService {
  findOddInt(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc ^ num, 0);
  }
}
