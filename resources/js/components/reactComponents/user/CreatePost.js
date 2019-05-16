import React, { Component } from 'react'

export default class CreatePost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div className={'uploadComp'}>
      <form className='uploadForm'>
        <input type='file'></input>
        {true&&[
        <input type='text'></input>,
        <input type='text'></input>,
        <input type='text'></input>]}
      </form>
      <div className={'imageContainer'}>
        <img src={"https://i.imgur.com/knBSybn.jpg"}></img>
      </div>
      </div>
    )
  }
}
