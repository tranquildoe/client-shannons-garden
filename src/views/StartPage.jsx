import React, { useEffect, useState } from "react";
import SeedBasic from "./../components/buildingBlocks/SeedBasic";
import IsForTradeButton from "./../components/button/IsForTradeButton";


export default function StartPage() {
  const [isForTrade, setOnlyForTrade] = useState(false);

  return (
    <div>
      <h1 className="title">Home page</h1>
      <IsForTradeButton
        clbk={() => setOnlyForTrade(!isForTrade)}
        status={isForTrade}
      />
      <SeedBasic isForTrade={isForTrade} isEditable={false} />
    </div>
  );
}
