import React, { Component } from 'react';
import CardColumn from './card-column';
import NewCardInput from './new-card-input';

class Trillo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardFinish = this.handleCardFinish.bind(this);
    };
    
    handleCardDelete() {
        console.log('Card being deleted');
    };

    handleCardFinish() {
        console.log('Card finish');
    };
    
    sortCardsByCompletion(array) {
        const completedCards = array.filter(card => card.is_completed);
        const uncompletedCards = array.filter(card => !card.is_completed);

        return (
            completedCards,
            uncompletedCards
        )
    }

    getCards() {
        fetch('/cards')
            .then((response) => {
                response.json().then((json) => {
                    const cards = this.sortCardsByCompletion(json);

                    this.setState({
                        completedCards: cards.completedCards,
                        uncompletedCards: cards.uncompletedCards
                    });
                });
            });
    };

    componentDidMount() {
        this.getCards();
    };


    render() {
        return (
            <div>
                <h1>Trillo</h1>
                <p><i>A honeybagder project</i></p>
                <NewCardInput />
                <CardColumn 
                    heading={'todo'}
                    handleCardDelete={this.handleCardDelete}
                    handleCardFinish={this.handleCardFinish}
                    cards={this.state.uncompletedCards}
                />
                <CardColumn 
                    heading={'done'}
                    handleCardDelete={this.handleCardDelete}
                    handleCardFinish={this.handleCardFinish}
                    cards={this.state.completedCards}
                />
            </div>
        )
    };
};

export default Trillo;
