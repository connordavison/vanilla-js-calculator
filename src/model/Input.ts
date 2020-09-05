import { Digit } from 'app/model/Digit';
import { Operator } from 'app/model/Operator';

export default interface Input {
    pushDigit(digit: Digit): void;
    pushOperator(operator: Operator): void;
    pushSign(): void;
    pushPeriod(): void;
    delete(): void;
    isEmpty(): boolean;
    toString(): string;
}
