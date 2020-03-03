// import React, { Component } from 'react'

// export default class Button extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <button className="stndrdBtn">Click me!</button>
//             </React.Fragment>
//         )
//     }
// }

import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <a className="button" href="http://localhost:3000/insertRouteNameHere">Click Me!</a>
            </React.Fragment>
        )
    }
}
