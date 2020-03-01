import React, { Component } from 'react'
import ImgMySeedListTextRect from "./ImgMySeedListTextRect"
import SeedBasic from "./../buildingBlocks/SeedBasic"
import "./../../styles/SeedBasic.css"

export default class MySeedList extends Component {
    render() {
        return (
            <div>
                <ImgMySeedListTextRect></ImgMySeedListTextRect>
                <SeedBasic>hi</SeedBasic>
            </div>
        )
    }
}
