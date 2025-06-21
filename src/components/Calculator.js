import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputDigit,
  inputDot,
  clearAll,
  chooseOperator,
  evaluate
} from '../redux/actions';

export default function Calculator() {
  const display = useSelector(state => state.displayValue);
  const history = useSelector(state => state.historyValue);
  const dispatch = useDispatch();

  return (
    <div className="calculator">
      {/* Histórico */}
      <div id="history" className="history">{history}</div>
      {/* Visor */}
      <div id="display" className="display">{display}</div>

      <div className="button-grid">
        {/* ROW 1 */}
        <button
          id="clear"
          className="button clear"
          onClick={() => dispatch(clearAll())}
        >
          AC
        </button>
        <button
          id="divide"
          className="button operator"
          onClick={() => dispatch(chooseOperator('/'))}
        >
          ÷
        </button>
        <button
          id="multiply"
          className="button operator"
          onClick={() => dispatch(chooseOperator('*'))}
        >
          ×
        </button>

        {/* ROW 2 */}
        <button
          id="seven"
          className="button digit"
          onClick={() => dispatch(inputDigit('7'))}
        >
          7
        </button>
        <button
          id="eight"
          className="button digit"
          onClick={() => dispatch(inputDigit('8'))}
        >
          8
        </button>
        <button
          id="nine"
          className="button digit"
          onClick={() => dispatch(inputDigit('9'))}
        >
          9
        </button>
        <button
          id="subtract"
          className="button operator"
          onClick={() => dispatch(chooseOperator('-'))}
        >
          −
        </button>

        {/* ROW 3 */}
        <button
          id="four"
          className="button digit"
          onClick={() => dispatch(inputDigit('4'))}
        >
          4
        </button>
        <button
          id="five"
          className="button digit"
          onClick={() => dispatch(inputDigit('5'))}
        >
          5
        </button>
        <button
          id="six"
          className="button digit"
          onClick={() => dispatch(inputDigit('6'))}
        >
          6
        </button>
        <button
          id="add"
          className="button operator"
          onClick={() => dispatch(chooseOperator('+'))}
        >
          +
        </button>

        {/* ROW 4 */}
        <button
          id="one"
          className="button digit"
          onClick={() => dispatch(inputDigit('1'))}
        >
          1
        </button>
        <button
          id="two"
          className="button digit"
          onClick={() => dispatch(inputDigit('2'))}
        >
          2
        </button>
        <button
          id="three"
          className="button digit"
          onClick={() => dispatch(inputDigit('3'))}
        >
          3
        </button>
        <button
          id="equals"
          className="button equals"
          onClick={() => dispatch(evaluate())}
        >
          =
        </button>

        {/* ROW 5 */}
        <button
          id="zero"
          className="button digit zero"
          onClick={() => dispatch(inputDigit('0'))}
        >
          0
        </button>
        <button
          id="decimal"
          className="button digit"
          onClick={() => dispatch(inputDot())}
        >
          .
        </button>
      </div>

      {/* Rodapé */}
      <div
        className="footer"
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontFamily: 'monospace',
          color: '#ccc'
        }}
      >
        Designed and Coded By<br />
        <strong>
          <a
            href="https://github.com/davrzin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4db8ff', textDecoration: 'none' }}
          >
            Davi Roberto
          </a>
          {' '}e{' '}
          <a
            href="https://github.com/ArturOliveir4"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4db8ff', textDecoration: 'none' }}
          >
            Artur Oliveira
          </a>
        </strong>
      </div>
    </div>
  );
}
