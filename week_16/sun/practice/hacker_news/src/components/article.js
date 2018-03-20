import React, { Component } from 'react';
import ArticleView from './article-view';


class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            modalOpen: false
        }

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.articleId}.json?print=pretty`)
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                    this.setState({
                        data
                    });
                });
            });
    }   

    openModal() {
        this.setState({
            modalOpen: true
        });
    }

    render() {
        return (
            <ArticleView 
                title={this.state.data.title}
                author={this.state.data.by}
                openModal={this.openModal}
            />
        )
    }
}

export default Article;