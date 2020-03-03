import React, { Component } from 'react'
import DashImgRectText from "./../components/userDashboard/DashImgRectText"
import BtnMySeedList from "./../components/userDashboard/BtnMySeedList"
import BtnMyWishList from "./../components/userDashboard/BtnMyWishList"
import BtnMyProfile from "./../components/userDashboard/BtnMyProfile"
import AvatarImg from "./../components/buildingBlocks/AvatarImg"

// Stylesheets
import "./../styles/MyDashboard.css"
import "./../styles/BtnMySeedList.css"
import "./../styles/BtnMyWishList.css"
import "./../styles/AvatarImg.css"
import "./../styles/BtnMyProfile.css"

export default class MyDashboard extends Component {
    render() {
        return (
            <div className="bigHolderDashboard">
                <div className="buttonAndAboutMeHolder">
                    <DashImgRectText></DashImgRectText>
                    <AvatarImg></AvatarImg>
                    <BtnMySeedList></BtnMySeedList>
                    <BtnMyWishList></BtnMyWishList>
                    <BtnMyProfile></BtnMyProfile>
                    <div className="aboutMe">About Me:</div>
                    <div className="zipCode">My zip code: 75011</div>
                </div>
            </div>
        )
    }
}

