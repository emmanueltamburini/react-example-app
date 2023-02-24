import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  
  const {value, accumulate} = useCounter(10);

  return (
    <div>
        <h3>Counter with hook: <small>{ value }</small></h3>
        <button
            className="btn btn-primary"
            onClick={() => accumulate(1)}
        >
            +1
        </button>
        &nbsp;
        <button
            className="btn btn-secondary"
            onClick={() => accumulate(-1)}
        >
            -1
        </button>
    </div>
  )
}
