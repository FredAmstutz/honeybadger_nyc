import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Signup from './user_credentials/signup';
import Login from './user_credentials/login';


const Layout = () => {
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Log in</Link>
            </header>

            <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
            </main>
        </div>
    )
}

export default Layout;

// export default class Layout extends Component {
//     constructor(props) {
//         super(props);
//         this.fetchTweets = this.fetchTweets.bind(this);
//     }

//     componentWillMount() {
//         this.props.userActions.fetchUser(); 
//         this.fetchTweets();
//     }

//     fetchTweets() {
//         this.props.tweetsActions.fetchTweets();
//     }

//     updateUserName() {
//         this.props.userActions.setUserName('Tacos');
//     }

//     render() {
//         const { user, tweets } = this.props;

//         const mappedTweets = tweets.map(tweet => {
//             return (
//                 <li key={tweet.id}>
//                     <span>{tweet.content}</span>
//                     <span>{tweet.author}</span>
//                 </li>
//             )
//         });
        
//         return (
//             <div>
//                 <h1>{user.name}</h1>
//                 <ul>{mappedTweets}</ul>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         user: state.user.user,
//         userFetched: state.user.fetched,
//         tweets: state.tweets.tweets,
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         userActions: bindActionCreators(userActions, dispatch),
//         tweetsActions: bindActionCreators(tweetActions, dispatch)
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);