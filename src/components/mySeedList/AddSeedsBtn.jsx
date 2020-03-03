import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <button className="stndrdBtn addSeedsBtn">+ Add Seeds</button> */}
                <a className="button addSeedsBtn" href="http://localhost:3000/addseeds">+ Add Seeds</a>
            </React.Fragment>
        )
    }
}
