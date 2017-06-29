var React = require('react');
var createReactClass = require('create-react-class');

var PostItem = createReactClass({
    render(){
        return(
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {this.props.title}
                    </h2>
                    <h3 className="post-subtitle">
                        {this.props.description}
                    </h3>
                </a>
                <p className="post-meta">Posted by <a href="#">{this.props.author}</a> on September 24, 2014</p>
                <hr/>
            </div>
        )
    }
})