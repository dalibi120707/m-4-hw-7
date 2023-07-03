import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import useCount from "../../Hooks/useCount";

const MainPage = () => {
  const { count, minus, plus } = useCount(1);
  return (
    <div>
      <NavMenu />
      <p>Main</p>
      <div>
        <p>{count}</p>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default MainPage;
