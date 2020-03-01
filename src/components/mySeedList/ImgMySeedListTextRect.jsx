import React, { Component } from 'react'

export default class ImgRectText extends Component {
    render() {
        return (
            <div className="">
                <img className="imgInBackRect" src="./images/seedVariety1.jpg" alt="variety of seeds"/>
                <div className="titleInFront">My Seed List</div>
            </div>
        )
    }
}
