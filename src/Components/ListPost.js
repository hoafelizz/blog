var React = require('react');
var createReactClass = require('create-react-class');

//Components
var PostItem = require('./PostItem');

var ListPost = createReactClass({
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        {
                            this.props.posts.map((post, id)=>{
                                <PostItem 
                                    key={id}
                                    title={post.title}
                                    description={post.description}
                                    author={post.author} />
                            })
                        }
                        <ul className="pager">
                            <li className="next">
                                <a href="#">Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = ListPost;