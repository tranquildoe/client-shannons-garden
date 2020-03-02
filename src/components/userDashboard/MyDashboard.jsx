import React, { Component } from 'react'
import DashImgRectText from "./DashImgRectText"
import BtnMySeedList from "./BtnMySeedList"
import BtnMyWishList from "./BtnMyWishList"
import BtnMyProfile from "./BtnMyProfile"
import AvatarImg from "./../buildingBlocks/AvatarImg"

// Stylesheets
import "./../../styles/MyDashboard.css"
import "./../../styles/BtnMySeedList.css"
import "./../../styles/BtnMyWishList.css"
import "./../../styles/AvatarImg.css"
import "./../../styles/BtnMyProfile.css"

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

