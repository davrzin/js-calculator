export const INPUT_DIGIT = 'INPUT_DIGIT';
export const INPUT_DOT = 'INPUT_DOT';
export const CLEAR = 'CLEAR';
export const CHOOSE_OPERATOR = 'CHOOSE_OPERATOR';
export const EVALUATE = 'EVALUATE';

export const inputDigit = digit => ({ type: INPUT_DIGIT, digit });
export const inputDot = () => ({ type: INPUT_DOT });
export const clearAll = () => ({ type: CLEAR });
export const chooseOperator = operator => ({ type: CHOOSE_OPERATOR, operator });
export const evaluate = () => ({ type: EVALUATE });
