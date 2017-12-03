

import React from 'react';

import './App.css';
import _ from 'lodash';
import api from './test/stub_API';
import { Link } from 'react-router';
import request from 'superagent'; 




class Form extends React.Component {
    state = { title: '', link: '' };

    handleAdd = (e) => {
        e.preventDefault();
        let title = document.getElementById("title").value.trim();
        let link = document.getElementById("link").value.trim();
        if (!title || !link) {
            return;
        }

        this.props.addHandler(title, link);
        document.getElementById("title").value = "";
        document.getElementById("link").value = "";
        this.setState({ status: '' })

    }



    render() {
        return (
            <form style={{ marginTop: '30px' }}>
                <h3>Add a new post</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control" placeholder="Title"
                        id="title"
                        onChange={this.handleTitleChange}
                    ></input>

                </div>
                <div className="form-group">
                    <input type="text"
                        className="form-control" placeholder="Link"
                        id="link"
                        onChange={this.handleLinkChange}
                    ></input>

                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>Post </button>

            </form>
        );


    }
};

class NewsItem extends React.Component {
    state = {
        status: '',
        title: this.props.post.title,
        link: this.props.post.link
    };

    handleVote = () => this.props.upvoteHandler(this.props.post._id);
    handleDownVote = () => this.props.downvoteHandler(this.props.post._id);

    handleTitleChange = (e) => this.setState({ title: e.target.value });

    handleLinkChange = (e) => this.setState({ link: e.target.value });


    render() {



        let lineStyle = {
            fontSize: '20px', marginLeft: '10px'
        };
        let cursor = { cursor: 'pointer' };
        let line;
        if (this.props.post.link) {
            line = <a href={this.props.post.link} >
                {this.props.post.title} </a>;
        } else {
            line = <span>{this.props.post.title} </span>;
        }
        return (

            <div >

                <span className="glyphicon glyphicon-thumbs-up"
                    style={cursor}
                    onClick={this.handleVote} ></span>
                {this.props.post.upvotes}

               

                <span style={lineStyle} >{line}<span>
                    <Link to={'/posts/' + this.props.post._id}>Comments</Link>
                    <span className="glyphicon glyphicon-thumbs-down"
                        style={cursor}
                        onClick={this.handleDownVote} ></span>
                  {this.props.post.downvotes}

                </span>
                </span>



            </div>

        );
    }
}

class NewsList extends React.Component {
    render() {
        let items = this.props.posts.map((post, index) => {
            return <NewsItem key={index}
                post={post}
                upvoteHandler={this.props.upvoteHandler} addHandler={this.props.addHandler} downvoteHandler={this.props.downvoteHandler} />

        })
        return (
            <div>
                {items}


            </div>
        );
    }
}

class HomeApp extends React.Component {
    componentDidMount() {
        request.get('http://localhost:3000/api/posts')
            .end((error, res) => {
                if (res) {
                    var posts = JSON.parse(res.text);
                    api.initialize(posts);
                    this.setState({});
                } else {
                    console.log(error);
                }
            });
    }
    addPost = (title, link) => {
        request
            .post('http://localhost:3000/api/posts')
            .send({ title: title, link: link })
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Error adding');
                } else {
                    let newPost = JSON.parse(res.text);
                    api.setOrUpdate(newPost);
                    this.setState({});
                }
            });
    };

    incrementUpvote = (id, upvotes) => {
        request
            .put('http://localhost:3000/api/posts/' + id + '/upvotes')
            .send({ upvotes: upvotes + 1 })
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Error upvoting post');
                } else {
                    request.get('http://localhost:3000/api/posts/' + id)
                        .end((error, res) => {
                            if (res) {
                                var post = JSON.parse(res.text);
                                api.setOrUpdate(post);
                                this.setState({});
                            } else {
                                console.log(error);
                            }
                        });
                } // end else
            });

    };




    decrementUpvote = (id, upvotes) => {
        request
            .put('http://localhost:3000/api/posts/' + id + '/upvotes')
            .send({ upvotes: upvotes - 1 })
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Error upvoting post');
                } else {
                    request.get('http://localhost:3000/api/posts/' + id)
                        .end((error, res) => {
                            if (res) {
                                var post = JSON.parse(res.text);
                                api.setOrUpdate(post);
                                this.setState({});
                            } else {
                                console.log(error);
                            }
                        });
                } // end else
            });

    };

    render() {
        var posts = _.sortBy(api.getAll(), function (post) {
            return - post.upvotes;
        }
        );
        return (
            <div >
                <NewsList posts={posts}
                    upvoteHandler={this.incrementUpvote} downvoteHandler={ this.decrementUpvote } />
                <Form addHandler={this.addPost} />
            </div>
        );
    }
}

export default HomeApp;