/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationsService {

    calPermutations(str: string): string[] {
        if (str.length <= 1) {
            return [str];
        }

        const results = new Set<string>();

        for (let i = 0; i < str.length; i++) {
            const firstChar = str[i];
            const charsLeft = str.substring(0, i) + str.substring(i + 1);
            for (const perm of this.calPermutations(charsLeft)) {
                results.add(firstChar + perm);
            }
        }
        return [...results];
    }
}
