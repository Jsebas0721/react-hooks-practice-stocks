import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([]);
  const [myStocks, setMyStocks]= useState([]);
  const [filteredStocks, setFilteredStocks]= useState("");
  const [sortStocks, setSortStocks] = useState("");
 

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then(resp => resp.json())
    .then(stock =>{
      const myStocksArray = stock.filter((stockItem) => stockItem.myStock === true);
      setMyStocks(myStocksArray);
      setStockList(stock);
    })  
  },[])

  function handleBuyStock(stockObject){
    console.log("You just bought:", stockObject);
    fetch(`http://localhost:3001/stocks/${stockObject.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"      
      },
      body: JSON.stringify({
        "myStock": true,
      })
    })
    .then(resp => resp.json())
    .then(stock => {
      setMyStocks([...myStocks,stock])
    });
   
  }

  function handleSellStock(stockObject){
    console.log("You just sold:", stockObject);
    fetch(`http://localhost:3001/stocks/${stockObject.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"      
      },
      body: JSON.stringify({
        "myStock": false,
      })
    })
    .then(resp => resp.json())
    .then(stockSold => {
      const updatedPortfolio = myStocks.filter((stock) => stock.id !== stockSold.id);
      setMyStocks(updatedPortfolio);
    });
  }

  
      const sortedStocks = [...stockList].sort((a,b) => {
        if(sortStocks === "Alphabetically"){
         return a.name.localeCompare(b.name)
        }else if(sortStocks === "Price"){
          return (a.price > b.price ? 1 : -1)
        }
      })
        
      const filterStocks = sortedStocks.filter(stock => {
        if(filteredStocks === ""){
           return stockList;
        }else{
            return stock.type === filteredStocks
        }  
      })

 
  return (
    <div>
      <SearchBar  setSortStocks={setSortStocks} setFilteredStocks={setFilteredStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={filterStocks} onBuyStock={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onSellStock={handleSellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
