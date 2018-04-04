import React, { Component } from 'react';
import NewTweedForm from './new-tweed-form.js';
import TweedView from './tweed-view.js';

class Tweedr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweeds: []
        }
        this.createNewTweed = this.createNewTweed.bind(this);
        this.deleteTweed = this.deleteTweed.bind(this);
    }

    async getAllTweeds() {
        const response = await fetch('/tweeds');
        const data = await response.json();

        this.setState({
            tweeds: data
        });
    }

    async createNewTweed(tweedBody) {
        fetch('/tweeds', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(tweedBody)
        });
        this.getAllTweeds();
    }

    async deleteTweed(e) {
        const tweedId = e.target.id;
        await fetch(`/tweeds/${tweedId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'applications/json'
            }
        });
        this.getAllTweeds();
    }

    componentDidMount() {
        this.getAllTweeds();
    }

    render() {

        return (
            <div>
                <h1>Tweedr</h1>
                <p><i>A honeybagder project</i></p>
                <NewTweedForm 
                    createNewTweed={this.createNewTweed}
                />
                { this.state.tweeds.map((tweed) => {
                    const { content, author, id } = tweed;

                    <TweedView 
                        key={id}
                        content={content}
                        author={author}
                        deleteTweed={this.deleteTweed}
                        id={id}
                    />
                })}
            </div>
        )
    }
}

export default Tweedr;