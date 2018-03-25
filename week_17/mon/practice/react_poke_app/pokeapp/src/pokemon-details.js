import React, { Component } from 'react';

class PokeDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>PokeDetails</h1>
                <p>Name</p>
                <p>Type</p>
                <p>Weight</p>
            </div>
        )
    }
}

export default PokeDetails;