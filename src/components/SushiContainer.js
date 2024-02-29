import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ 
  sushis,
  setSushis,
  onSushiEaten,
  isClickable,
  wallet
 }) {
  const [currentPage, setCurrentPage] = useState(1)
  
  useEffect(() => {
    fetch(`http://localhost:3001/sushis/?_limit=4&_page=${currentPage}`)
      .then(res => res.json())
      .then(sushis => setSushis(sushis))
  }, [currentPage])
  
  // Increments currentPage
  function moreSushi() {
    const newPage = currentPage + 1
    setCurrentPage(newPage)
  }

  // DISPLAY SUSHI
  const displaySushis = sushis.map(sushi => {
    return <Sushi 
    key={sushi.id}
    sushi={sushi}
    onSushiEaten={onSushiEaten}
    isClickable={isClickable}
    wallet={wallet}
    />
  })
  
  return (
    <div className="belt">
      {displaySushis}
      <MoreButton moreSushi={moreSushi} />
    </div>
  );
}

export default SushiContainer;
