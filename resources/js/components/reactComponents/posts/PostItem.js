import React, { Component } from 'react'

export default class PostItem extends Component {
    constructor(props) {
      super(props)
      this.img_url='https://i.imgur.com/4v9Q2tQ.jpg'
      this.state = {
         open: false
      }
    }
    
  render() {
    const{postId, postOpen}=this.props;
    return (
        <div onClick={()=>this.props.openPost(postId)} className={`centerAll postItem`}>
            <img src={this.img_url}></img>
            {postId===postOpen&&<div className="selectedArrow"/>}
        </div>
    )
  }
}
