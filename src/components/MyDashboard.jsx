import React, { Component } from 'react'
import DBImgRectText from "./userDashboard/DBImgRectText"
import BtnMySeedList from "./userDashboard/BtnMySeedList"
import BtnMyWishList from "./userDashboard/BtnMyWishList"
import "./../styles/MyDashboard.css"
import "./../styles/BtnMySeedList.css"
import "./../styles/BtnMyWishList.css"


export default class MyDashboard extends Component {
    render() {
        return (
            <div className="pageHolder">
                {/* <div>hiya</div> */}
                <div className="buttonAndAboutMeHolder">
                    <DBImgRectText></DBImgRectText>
                    <BtnMySeedList></BtnMySeedList>
                    <BtnMyWishList></BtnMyWishList>
                    <div className="aboutMe">About Me:</div>
                </div>
            </div>
        )
    }
}

