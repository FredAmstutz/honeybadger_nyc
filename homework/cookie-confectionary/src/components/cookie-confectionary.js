import React, { Component } from 'react';
import Cookies from 'js-cookie';

class CookieConfectionary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sugarCookieCount: 0,
            chocolateCookieCount: 0,
            lemonCookieCount: 0
        }
        
        this.setSugarCookie = this.setSugarCookie.bind(this);
        this.setChocolateCookie = this.setChocolateCookie.bind(this);
        this.setLemonCookie = this.setLemonCookie.bind(this);
        this.clearCookies = this.clearCookies.bind(this);
    }

    getCookieCount(flavor) {
        return parseInt(Cookies.get(flavor)) || 0;
    }

    setSugarCookie() {
        let currentCookieCount = this.getCookieCount('sugar');
        Cookies.set('sugar', currentCookieCount + 1);
        this.setState({
            sugarCookieCount: this.getCookieCount('sugar')
        });
    }

    setChocolateCookie() {
        let currentCookieCount = this.getCookieCount('chocolate');
        Cookies.set('chocolate', currentCookieCount + 1);
        this.setState({
            chocolateCookieCount: this.getCookieCount('chocolate')
        });
    }

    setLemonCookie() {
        let currentCookieCount = this.getCookieCount('lemon');
        Cookies.set('lemon', currentCookieCount + 1);
        this.setState({
            lemonCookieCount: this.getCookieCount('lemon')
        });
    }

    clearCookies() {
        Cookies.remove('sugar');
        Cookies.remove('chocolate');
        Cookies.remove('lemon');
        this.setState({
            sugarCookieCount: 0,
            chocolateCookieCount: 0,
            lemonCookieCount: 0
        })
    }

    render() {
        return (
            <div className="main">
                <h1>Cookie Confectionary</h1>
                <p>Sugar cookie count: <span>{this.state.sugarCookieCount}</span></p>
                <p>Chocolate cookie count: <span>{this.state.chocolateCookieCount}</span></p>
                <p>Lemon cookie count: <span>{this.state.lemonCookieCount}</span></p>
                <div className="addCookieButtons">
                    <button onClick={this.setSugarCookie}>Add a sugar cookie</button>
                    <button onClick={this.setChocolateCookie}>Add a chocolate cookie</button>
                    <button onClick={this.setLemonCookie}>Add a lemon cookie</button>
                </div>
                <br/>
                <button onClick={this.clearCookies}>Clear cookies</button>
            </div>
        )
    }
}

export default CookieConfectionary;