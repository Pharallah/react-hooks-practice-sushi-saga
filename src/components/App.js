import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [wallet, setWallet] = useState(1000)
  const [isClickable, setIsClickable] = useState(true)


  function onSushiEaten(sushiId) {
    // Updates Empty Plates on Table
    setPlates([
      ...plates,
      sushiId
    ])
   
    sushis.forEach(sushi => {
      if(sushi.id === sushiId) {
        // If you don't have enough money, you can't click it anymore
        if(wallet < sushi.price) {
          setIsClickable(!isClickable)
        } else {
          // Else, keep buying sushi
          const updatedWallet = wallet - sushi.price
          setWallet(updatedWallet)
        }
      }
    })
  }

  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis}
      setSushis={setSushis}
      onSushiEaten={onSushiEaten}
      isClickable={isClickable}
      wallet={wallet}
      />
      <Table 
      plates={plates}
      wallet={wallet}
      />
    </div>
  );
}

export default App;
