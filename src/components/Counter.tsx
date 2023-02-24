import { useState } from "react";

export const Counter = () => {
  
  const [value, setValue] = useState<number>(10);

  const accumulate = (number: number): void => {
    setValue(value + number);
  }

  return (
    <div>
        <h3>Counter: <small>{ value }</small></h3>
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
