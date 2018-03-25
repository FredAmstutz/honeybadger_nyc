import React, { Component } from 'react';

class PokeList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('http://.pokeapi.co/api/v2/pokemon')
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        data
                    });
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Pokelist</h1>
                {
                    this.state.data.map((pokemonid) => {
                        return (
                            <h1>pokemonid</h1>
                        )
                    })
                    //CLICK EVENT
                    //ON CLICK, UPDATE STATE IN POKEDTAILS WITH NECESSARY DATA VALUES
                }
            </div>
        )
    }
}

export default PokeList;