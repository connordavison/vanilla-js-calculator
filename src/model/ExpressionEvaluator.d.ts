export default interface ExpressionEvaluator {
    evaluate(expr: string, scope?: object): any;
}
