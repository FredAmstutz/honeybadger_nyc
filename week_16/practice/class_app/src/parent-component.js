import React, { Component } from 'react';
import SubComponent from './sub-component';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageSrc: 'http://placecage.com/200/200'
        }
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
        this.setState({
            tacos:'are delicious'
        }); 
    }

    shouldComponentUpdate() {
        console.log('should component uodate')
        return true;
    }

    render() {
        return (
            <div>
                <SubComponent 
                    imageSrc = {this.state.imageSrc}
                />
            </div>
        )
    }
};

export default ParentComponent;