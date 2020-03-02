import React, { Component } from 'react'
import ImgAboutTxtRect from "./ImgAboutTxtRect"
import ImgMissionTall from "./ImgMissionTall"
import Vision from "./Vision"
import CoreValues from "./CoreValues"

import "./../../styles/ImgAboutTxtRect.css"
import "./../../styles/ImgMissionTall.css"
import "./../../styles/Vision.css"
import "./../../styles/CoreValues.css"

export default class About extends Component {
    render() {
        return (
            <div className="bigDivAboutPage">
                <ImgAboutTxtRect></ImgAboutTxtRect>
                <ImgMissionTall></ImgMissionTall>
                <img className="handsImg" src="./images/aboutPage/seedsHands.jpg" alt="seeds cupped in 3 people's hands"/>
                <Vision></Vision>
                <img className="circlehandsImg" src="./images/aboutPage/seedsCircleHands.jpg" alt="seeds in hands in a circle"/>
                <CoreValues></CoreValues>
            </div>
        )
    }
}
