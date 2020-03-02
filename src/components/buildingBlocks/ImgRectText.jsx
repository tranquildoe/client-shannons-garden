import React, { Component } from 'react'

export default class ImgRectText extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="imgInBackRect" src="./images/imageNameHere.jpg" alt=""/>
                <div className="titleInFront">Title</div>
            </React.Fragment>
        )
    }
}
