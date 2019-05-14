import React, { Component } from 'react'
import PostItem from './PostItem.js'
import PostView from './PostView.js'

export default class PostRow extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    const {openPost, postOpen,posts}=this.props;
    let viewPost=posts.includes(postOpen);
    return (
      <div className={'postRow'}>
        <div className='postRowFlex'>
            {this.props.posts.map(post=><PostItem openPost={openPost} postOpen={postOpen} postId={post}/>)}
        </div>
        {viewPost&&<section>
            <PostView scroll={this.props.scroll}/>
        </section>}
      </div>
    )
  }
}
