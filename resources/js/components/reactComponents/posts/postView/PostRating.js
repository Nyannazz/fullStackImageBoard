import React, { Component } from 'react'

export default class PostRating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         upvotes: 0,
         downvotes: 0,
         views: 0
      }
    }
    
  render() {
    const {upvotes,downvotes,views}=this.state;
    return (
      <div className={"ratings"}>
        <section>
            <p>+</p>
            <p>-</p>
        </section>
        <p className={'ratingP'}>{views}</p>
      </div>
    )
  }
}
