import {
  INPUT_DIGIT,
  INPUT_DOT,
  CLEAR,
  CHOOSE_OPERATOR,
  EVALUATE
} from './actions';

const initialState = {
  displayValue: '0',
  historyValue: '',
  previousValue: null,
  operator: null,
  waitingForOperand: false,
  evaluated: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INPUT_DIGIT: {
      const d = action.digit;
      if (state.evaluated) {
        return {
          ...initialState,
          displayValue: d,
          historyValue: d
        };
      }
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: d,
          historyValue: state.historyValue + d,
          waitingForOperand: false
        };
      }
      if (state.displayValue === '0' && d === '0') {
        return state;
      }
      if (state.displayValue === '0') {
        return {
          ...state,
          displayValue: d,
          historyValue: state.historyValue === '' ? d : state.historyValue + d
        };
      }
      return {
        ...state,
        displayValue: state.displayValue + d,
        historyValue: state.historyValue + d
      };
    }

    case INPUT_DOT: {
      if (state.waitingForOperand) {
        return {
          ...state,
          displayValue: '0.',
          historyValue: state.historyValue + '0.',
          waitingForOperand: false
        };
      }
      if (!state.displayValue.includes('.')) {
        return {
          ...state,
          displayValue: state.displayValue + '.',
          historyValue: state.historyValue + '.'
        };
      }
      return state;
    }

    case CLEAR:
      return { ...initialState };

    case CHOOSE_OPERATOR: {
      const op = action.operator;
      let hist = state.historyValue;

      if (state.evaluated) {
        hist = state.displayValue;
      }

      if (op === '-' && /[+\-*/]$/.test(hist)) {
        return {
          ...state,
          historyValue: hist + '-',
          displayValue: '-',
          waitingForOperand: false,
          evaluated: false
        };
      }

      hist = hist.replace(/[-+*/]+$/, '') + op;
      return {
        ...state,
        historyValue: hist,
        displayValue: op,
        waitingForOperand: true,
        evaluated: false
      };
    }

    case EVALUATE: {
      if (!state.historyValue || state.waitingForOperand) return state;
      try {
        const result = eval(state.historyValue);
        const res = String(!isFinite(result) ? Infinity : result);
        return {
          ...state,
          displayValue: res,
          historyValue: state.historyValue + '=' + res,
          waitingForOperand: false,
          evaluated: true
        };
      } catch {
        return state;
      }
    }

    default:
      return state;
  }
}

export default reducer;
