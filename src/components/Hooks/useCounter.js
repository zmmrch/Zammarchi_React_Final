// coustom hook counter
import { useState } from "react";

export const useCounter = (initial, stock) => {
  const [count, setCount] = useState(initial);

  const handleSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleResta = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return {
    count,
    handleResta,
    handleSuma,
  };
};
