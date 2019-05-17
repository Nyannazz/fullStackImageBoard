import React, { Component } from 'react'
import WelcomeBanner from './userPage/WelcomeBanner.js'
import CreatePost from './CreatePost.js'

export default class UserPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

  render() {
    return (
      <div id='userPage'>
        <WelcomeBanner/>
        <CreatePost/>
        <section className={'postBoardProfile'}>
          {this.props.children}
        </section>
      </div>
    )
  }
}
