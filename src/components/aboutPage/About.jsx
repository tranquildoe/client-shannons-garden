import React, { Component } from 'react'
import ImgAboutTxtRect from "./ImgAboutTxtRect"
import "./../../styles/ImgAboutTxtRect.css"

export default class About extends Component {
    render() {
        return (
            <div className="bigDivAboutPage">
                <ImgAboutTxtRect></ImgAboutTxtRect>
            </div>
        )
    }
}
