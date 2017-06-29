import React, { Component } from 'react';

//Components

import Nav from './Components/Nav';
import Header from './Components/Header';
import ListPost from './Components/ListPost';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    var posts = [];
    fetch('http://example.api/wp-json/api/v1/posts')
    .then(res => res.json())
    .then(res=> {
      posts = res.data;
    }).catch(err=>console.log(err));
    return (
      <div id="wrapper">
        <Nav />
        <Header />
        <ListPost posts={posts}/>
      </div>
    );
  }
}

export default App;
