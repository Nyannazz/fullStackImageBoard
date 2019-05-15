import React, { Component } from 'react'
import PostRating from './postView/PostRating.js'
import {BoardConsumer} from '../imageBoardContext.js'


export default class PostView extends Component {
  constructor(props) {
    super(props)
    this.scrollRef=React.createRef();
    this.img_url='https://img.pr0gramm.com/2019/05/15/159cd1cb97de3843.png'
    this.state = {
    }
  }
  componentDidMount(){
    this.props.provContext.setScroll(this.scrollRef.current.getBoundingClientRect().y)  
  }
    
  render() {
    return (
      <BoardConsumer>
        {context=>
          (<div ref={this.scrollRef} className={`postView`}>

          <img src={this.img_url}></img>

          <PostRating/>
          <div className='comments'>
            I thought my video was up this whole time and nobody was watching... it made me sad... but then i realized the youtube overlords didn't like my recorder version of Take On Me and they COPYRIGHTED THE VIDEO AND BLOCKED IT ASKDJFHASDKJFHASJKDHFJKAS... Now i'm rerendering it and will have it uploaded soon...﻿
          </div>
          <div onClick={()=>context.openPost(context.state.postOpen+1)} className={'postNav navForward centerAll'}>
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </div>
          <div onClick={()=>context.openPost(context.state.postOpen-1)} className={'postNav navBack centerAll'}>
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </div>
        </div>)
        }
      </BoardConsumer>
        
    )
  }
}
