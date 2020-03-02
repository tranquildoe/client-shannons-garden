import React, { Component } from 'react'

export default class ImgRectText extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="imgInBackRect stones" src="./images/aboutPage/steppingStonesBackSq.jpg" alt="stepping stones surrounded by moss"/>
                <div className="titleInFront mission">
                    Mission: <br /> 
                    To provide a user-friendly app <br /> where you can set up <br /> seed trades and keep <br /> your seed lists.
                </div>
            </React.Fragment>
        )
    }
}
