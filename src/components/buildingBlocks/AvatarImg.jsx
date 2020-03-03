import React, { Component } from 'react'

export default class AvatarImg extends Component {
    render() {
        return (
            <div className="avatarHolder">
                <img className="avatarImage" src="../images/defaultAvatar.png" alt="avatar"/>
            </div>
        )
    }
}
