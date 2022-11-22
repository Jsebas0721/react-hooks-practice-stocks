import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onBuyStock}) {

  const stocks = stockList.map((stock)=>(
    <Stock key={stock.id} stock={stock} onHandleStock={onBuyStock}/>
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stocks}
    </div>
  );
}

export default StockContainer;
