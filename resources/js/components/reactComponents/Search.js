import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <form className={"searchComp centerAll"}>
        <input className='searchInput' type='text'></input>
        <input className='searchSubmit' type='submit'></input>
      </form>
    )
  }
}
