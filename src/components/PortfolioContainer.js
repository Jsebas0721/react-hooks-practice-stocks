import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, onSellStock}) {

  const myPortfolio = myStocks.map((stock)=>(
    <Stock key={stock.id} stock={stock} onHandleStock={onSellStock}/>
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolio}
    </div>
  );
}

export default PortfolioContainer;
