import React, { useEffect, useState } from "react";
import SeedBasic from "./../components/buildingBlocks/SeedBasic";
import IsForTradeButton from "../components/buildingBlocks/IsForTradeButton";

import "./../styles/StartPage.css"

export default function StartPage() {
  const [isForTrade, setOnlyForTrade] = useState(false);

  return (
    <div className="logoAndButtonHolder">
      {/* <h1 className="title">Home page</h1> */}
      <img className="logo" src="./images/new/sgLogo.png" alt="sweet logo"/>
      
      <IsForTradeButton
        clbk={() => setOnlyForTrade(!isForTrade)}
        status={isForTrade}
      />
      <SeedBasic isForTrade={isForTrade} isEditable={false} hasAvatar={true} />
    </div>
  );
}
