import React, { useState } from "react";

function Sushi({ 
  sushi, 
  onSushiEaten,
  isClickable,
  wallet
}) {
  const [eaten, setEaten] = useState(false)

  function onSushiClick() {
    // If you have enough money, you can eat
    if (wallet > sushi.price) {
      setEaten(true)
      onSushiEaten(sushi.id)
    }
  }
  
  return (
    <div className="sushi">
      <div className="plate" 
      onClick={isClickable ? onSushiClick : null}
      >
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
