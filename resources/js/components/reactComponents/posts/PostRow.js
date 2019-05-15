import React, { Component } from 'react'
import PostItem from './PostItem.js'
import PostView from './PostView.js'
import { isContext } from 'vm';
import {AppConsumer} from '../../AppContext.js'


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
        {viewPost&&
          <section>
            <AppConsumer>
              {context=><PostView provContext={context}/>}
            </AppConsumer>
         </section>}
      </div>
    )
  }
}
