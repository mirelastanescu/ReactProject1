import React from 'react';
import PostItem from "./PostItem";

class PostList extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <h1>Lista postari:</h1>
                {   
                    posts.map((post, index) => {
                        return <PostItem key={index} post={post}></PostItem>
                    })
                }
            </div>
        );
  }
}

export default PostList;