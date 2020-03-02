import React, { Component } from 'react'
import DashImgRectText from "./userDashboard/DashImgRectText"
import BtnMySeedList from "./userDashboard/BtnMySeedList"
import BtnMyWishList from "./userDashboard/BtnMyWishList"
import AvatarImg from "./buildingBlocks/AvatarImg"
import "./../styles/MyDashboard.css"
import "./../styles/BtnMySeedList.css"
import "./../styles/BtnMyWishList.css"
import "./../styles/AvatarImg.css"


export default class MyDashboard extends Component {
    render() {
        return (
            <div className="bigHolderDashboard">
                <div className="buttonAndAboutMeHolder">
                    <DashImgRectText></DashImgRectText>
                    <AvatarImg></AvatarImg>
                    <BtnMySeedList></BtnMySeedList>
                    <BtnMyWishList></BtnMyWishList>
                    <div className="aboutMe">About Me:</div>
                </div>
            </div>
        )
    }
}

