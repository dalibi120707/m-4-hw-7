import { useEffect, useState } from "react";

const useCount = (number) => {
  const [count, setCount] = useState(number);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    setCount((prev) => (prev < 1 ? prev : prev - 1));
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return { plus: handlePlus, minus: handleMinus, count };
};

export default useCount;
