import React from 'react';
import { Link } from 'react-router';
import { PostsList } from './posts-list';
import axios from 'axios';

export default class PostsIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8081/posts')
      .then(res => this.setState({posts: res.data}));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <input placeholder="Title search ..."></input>
          </div>
          <div className="col-md-6 text-right">
            <Link to="/posts/new" className="btn btn-primary">New Post</Link>
          </div>
        </div>
        <PostsList posts={this.state.posts} />
        </div>
    );
  }
}
