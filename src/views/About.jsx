import React, { Component } from 'react'
import ImgAboutTxtRect from "./../components/aboutPage/ImgAboutTxtRect"
import ImgMissionTall from "./../components/aboutPage/ImgMissionTall"
import Vision from "./../components/aboutPage/Vision"
import CoreValues from "./../components/aboutPage/CoreValues"

import "./../styles/ImgAboutTxtRect.css"
import "./../styles/ImgMissionTall.css"
import "./../styles/Vision.css"
import "./../styles/CoreValues.css"

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
                <img className="seedPackSoil" src="./images/aboutPage/seedPackSoil.jpg" alt="seeds spilling out of seedpack onto the soil"/>
            </div>
        )
    }
}
