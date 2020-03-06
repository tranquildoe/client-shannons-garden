import React, { useContext } from "react";
import DashImgRectText from "./../components/userDashboard/DashImgRectText";
import BtnMySeedList from "./../components/userDashboard/BtnMySeedList";
import BtnMyWishList from "./../components/userDashboard/BtnMyWishList";
import BtnMyProfile from "./../components/userDashboard/BtnMyProfile";
import AvatarImg from "./../components/buildingBlocks/AvatarImg";
import { UserContext } from "./../auth/UserContext";
import Button from "./../components/buildingBlocks/Button"

// Stylesheets
import "./../styles/MyDashboard.css";
import "./../styles/BtnMySeedList.css";
import "./../styles/BtnMyWishList.css";
import "./../styles/AvatarImg.css";
import "./../styles/BtnMyProfile.css";

export default function MyDashboard() {
  const { currentUser } = useContext(UserContext);
  
  return (
    <div className="bigHolderDashboard">
      <div className="buttonAndAboutMeHolder">
        <DashImgRectText></DashImgRectText>
        {currentUser && <AvatarImg src={currentUser.avatarUrl} />}
        <BtnMySeedList></BtnMySeedList>
        <BtnMyWishList></BtnMyWishList>
        <BtnMyProfile></BtnMyProfile>
        <div className="aboutMe">About Me:</div>
        <div className="zipCode">My zip code: 75011</div>
      </div>
    </div>
  );
}
