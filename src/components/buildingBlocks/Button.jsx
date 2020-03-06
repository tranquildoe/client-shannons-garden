import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/example" className="button">Click me!</Link> 
                
            </React.Fragment>
        )
    }
}
