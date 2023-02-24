import { useState } from "react";

export const useCounter = (initialNumber: number = 10) => {
    const [value, setValue] = useState<number>(initialNumber);

    const accumulate = (number: number): void => {
      setValue(value + number);
    }

    return {
        value,
        accumulate
    };
}
