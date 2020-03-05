import React from "react";

const IsForTradeButton = ({ clbk, status = false }) => {
  return (
    <button
      onClick={() => clbk(!status)}
      className={`${status ? "btn-success" : 'btn-secondary'}`}>
      For trade
    </button>
  );
};

export default IsForTradeButton;