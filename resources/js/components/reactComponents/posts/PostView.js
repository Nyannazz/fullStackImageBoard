import React, { Component } from 'react'
import PostRating from './postView/PostRating.js'


export default class PostView extends Component {
  constructor(props) {
    super(props)
    this.scrollRef=React.createRef();
    this.img_url='https://img.pr0gramm.com/2019/05/15/159cd1cb97de3843.png'
    this.state = {
    }
  }
  componentDidMount(){
    this.props.scroll(this.scrollRef.current.getBoundingClientRect().y)
  }
    
  render() {
    return (
        <div ref={this.scrollRef} className={`postView`}>

          <img src={this.img_url}></img>

          <PostRating/>
          <div className='comments'>
            I thought my video was up this whole time and nobody was watching... it made me sad... but then i realized the youtube overlords didn't like my recorder version of Take On Me and they COPYRIGHTED THE VIDEO AND BLOCKED IT ASKDJFHASDKJFHASJKDHFJKAS... Now i'm rerendering it and will have it uploaded soon...﻿
          </div>
        </div>
    )
  }
}
