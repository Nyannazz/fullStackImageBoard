import React, { Component } from 'react'

export default class PostItem extends Component {
    constructor(props) {
      super(props)
      this.img_url='https://img.pr0gramm.com/2019/05/15/159cd1cb97de3843.png'
      this.state = {
         open: false
      }
    }
    
  render() {
    const{postId, postOpen}=this.props;
    return (
        <div onClick={()=>this.props.openPost(postId)} className={`centerAll postItem pointer`}>
            <img src={this.img_url}></img>
            {postId===postOpen&&<div className="selectedArrow"/>}
        </div>
    )
  }
}
