import React, { useState, useEffect } from "react";
import ImgMySeedListTextRect from "./../components/mySeedList/ImgMySeedListTextRect";
import SeedBasic from "./../components/buildingBlocks/SeedBasic";
import AddSeedsBtn from "./../components/mySeedList/AddSeedsBtn";
import IsForTradeButton from "./../components/button/IsForTradeButton";

// Stylesheets
import "./../styles/SeedBasic.css";
import "./../styles/AddSeedsBtn.css";
import "./../styles/MySeedList.css";

export default function MySeedList() {
  const [isForTrade, setOnlyForTrade] = useState(false);

  return (
    <div className="bigHolderMySeedList">
      <ImgMySeedListTextRect></ImgMySeedListTextRect>
      <AddSeedsBtn></AddSeedsBtn>
      <IsForTradeButton
        clbk={() => setOnlyForTrade(!isForTrade)}
        status={isForTrade}
      />
      <SeedBasic isForTrade={isForTrade} isEditable={true}></SeedBasic>
    </div>
  );
}
