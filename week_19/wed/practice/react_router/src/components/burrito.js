import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Burrito extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>BURRITOS</h1>
        )
    }

    componentDidMount() {
        <Redirect to='/tacos' />
    }
}

export default Burrito;