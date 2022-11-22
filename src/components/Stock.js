import React from "react";

function Stock({stock, onHandleStock}) {

  const {ticker, name, price} = stock;

  return (
    <div>
      <div className="card" onClick={()=> onHandleStock(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker+": "+price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
