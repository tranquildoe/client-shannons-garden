import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <button className="stndrdBtn profileBtn">My Profile</button> */}
                <a className="button profileBtn" href="http://localhost:3000/myprofile">My Profile</a>
            </React.Fragment>
        )
    }
}
