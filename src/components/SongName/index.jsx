import React, { Component } from 'react'

import { Fade } from "react-awesome-reveal";

class Name extends Component {
    render() {
        return (
            <Fade triggerOnce={true}>
            <div>
                {this.props.name}
            </div>
            </Fade>
        )
    }
}

export default Name