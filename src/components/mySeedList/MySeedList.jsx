import React, { Component } from 'react'
import ImgMySeedListTextRect from "./ImgMySeedListTextRect"
import SeedBasic from "./../buildingBlocks/SeedBasic"
import AddSeedsBtn from "./AddSeedsBtn"

// Stylesheets
import "./../../styles/SeedBasic.css"
import "./../../styles/AddSeedsBtn.css"

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
