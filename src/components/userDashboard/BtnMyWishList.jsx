import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <button className="stndrdBtn myWishListBtn">My Wish List</button> */}
                <a className="button myWishListBtn" href="http://localhost:3000/mywishlist">My Wish List</a>
            </React.Fragment>
        )
    }
}
