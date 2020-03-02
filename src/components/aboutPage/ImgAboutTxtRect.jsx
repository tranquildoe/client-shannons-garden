import React, { Component } from 'react'
import ImgMissionTall from "./ImgMissionTall"
// import Break from "./../buildingBlocks/Break"
import "./../../styles/ImgMissionTall.css"
// import "./../../styles/Break.css"


export default class ImgRectText extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="imgInBackRect" src="./images/aboutPage/seedsLinesRect.jpg" alt="seeds in lines"/>
                <div className="titleInFront about">About</div>
                {/* <Break></Break> */}
                <ImgMissionTall></ImgMissionTall>

            </React.Fragment>
        )
    }
}
