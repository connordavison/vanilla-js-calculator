import { Digit } from 'app/model/Digit';
import { Operator } from 'app/model/Operator';
import Input from 'app/model/Input';

const ZERO = '0';
type EmptyContents = '0'|'';

export default class NumberInput implements Input {
    private isNegated: boolean = false;

    constructor(
        private emptyContents: EmptyContents = ZERO,
        private contents: string = emptyContents,
    ) {}

    public pushDigit(digit: Digit): void {
        if (this.contents === this.emptyContents) {
            this.contents = digit;
        } else {
            this.contents += digit;
        }
    }

    public pushPeriod(): void {
        if (!this.contents.includes('.')) {
            this.contents += '.';
        }
    }

    public pushOperator(operator: Operator): void {
        // noop
    }

    public pushSign(): void {
        this.isNegated = !this.isNegated;
    }

    public delete(): void {
        const contents = this.contents.slice(0, this.contents.length - 1);

        if (contents === '') {
            this.contents = this.emptyContents;
        } else {
            this.contents = contents;
        }
    }

    public isEmpty() {
        return this.contents === this.emptyContents;
    }

    public toString(): string {
        if (this.isNegated && this.contents !== ZERO) {
            return '-' + this.contents;
        }

        return this.contents;
    }
}
