import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <button className="stndrdBtn mySeedListBtn">My Seed List</button> */}
                <a className="button mySeedListBtn" href="http://localhost:3000/myseedlist">My Seed List</a>
            </React.Fragment>
        )
    }
}