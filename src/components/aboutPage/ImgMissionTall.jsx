import React, { Component } from 'react'

export default class ImgRectText extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="imgInBackRect stones" src="./images/aboutPage/steppingStonesBack.jpg" alt="stepping stones surrounded by moss"/>
                <div className="titleInFront">
                    Mission: <br /> 
                    To provide a user-friendly app where you can set up seed trades and keep your seed lists.
                </div>
            </React.Fragment>
        )
    }
}
