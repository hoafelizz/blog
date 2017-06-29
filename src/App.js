import React, { Component } from 'react';

//Components

import Nav from './Components/Nav';
import Header from './Components/Header';
import ListPost from './Components/ListPost';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://example.api/wp-json/api/v1/posts')
    .then(res => res.json())
    .then(res=> {
      this.setState({
        posts: res.data
      });
    }).catch(err=>console.log(err));
  }

  render() {
    return (
      <div id="wrapper">
        <Nav />
        <Header />
        <ListPost posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
