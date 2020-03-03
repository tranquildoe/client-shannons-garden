import React, { Component } from 'react'
import ImgMySeedListTextRect from "./../components/mySeedList/ImgMySeedListTextRect"
import SeedBasic from "./../components/buildingBlocks/SeedBasic"
import AddSeedsBtn from "./../components/mySeedList/AddSeedsBtn"

// Stylesheets
import "./../styles/SeedBasic.css"
import "./../styles/AddSeedsBtn.css"
import "./../styles/MySeedList.css"

export default class MySeedList extends Component {
    render() {
        return (
            <div className="bigHolderMySeedList">
                <ImgMySeedListTextRect></ImgMySeedListTextRect>
                <AddSeedsBtn></AddSeedsBtn>
                <SeedBasic></SeedBasic>
            </div>
        )
    }
}
