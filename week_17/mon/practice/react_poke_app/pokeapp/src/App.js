import React from 'react';
import PokeList from './pokemon-list';
import PokeDetails from './pokemon-details';

const App = ({}) => {
    return (
        <div>
            <h1>PokeApp</h1>
            <PokeList />
            <PokeDetails />
        </div>
    )
}

export default App;