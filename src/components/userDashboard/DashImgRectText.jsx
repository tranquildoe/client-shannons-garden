import React, { Component } from 'react'

export default class ImgRectText extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="imgInBackRect" src="../images/greenArborTunnelRect.jpg" alt=""/>
                <div className="titleInFront">My Dashboard</div>
            </React.Fragment>
        )
    }
}