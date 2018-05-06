import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducer from './reducers/movie-reducer';

const middleware = applyMiddleware(promise(), thunk);



export default createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleware
);