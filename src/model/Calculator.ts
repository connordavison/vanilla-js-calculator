import Input from 'app/model/Input';
import ExpressionEvaluator from 'app/model/ExpressionEvaluator';
import InfixInput from 'app/model/InfixInput';
import NumberInput from 'app/model/NumberInput';

export default class Calculator {
    constructor(private expressionEvaluator: ExpressionEvaluator) {}

    public createInput(): Input {
        return new InfixInput(new NumberInput());
    }

    public evaluate(input: Input): Input {
        const answer = this.expressionEvaluator.evaluate(input.toString());

        return new InfixInput(new NumberInput('0', answer.toString()));
    }
}
