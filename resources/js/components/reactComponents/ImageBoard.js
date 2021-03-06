import React, { Component } from 'react'
import PostItem from './posts/PostItem.js'
import PostRow from './posts/PostRow.js'
import {BoardProvider} from './imageBoardContext.js'
import axios from 'axios'


export default class ImageBoard extends Component {
    constructor(props) {
      super(props)
      console.log(this.props.location.search)
      this.createRows=this.createRows.bind(this)
      this.openPost=this.openPost.bind(this)
      this.state = {
         //posts: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
         posts:[],
         postOpen: null
      }
    }
    componentDidMount(){
      axios.get('http://image-board.local/posts').then(res=>{
        this.setState({posts:res.data},()=>console.log(this.state.posts))
      }).catch(err=>{
        console.log(err)
      })
      this.props.history.push('/top/?id=23423')
    }
    openPost(postId){
      this.setState({postOpen: postId})
    }
    createRows(rowLen){
      this.rows=[]
      this.postRowCount=0;
      for(let i=0;i<this.state.posts.length;i++){
        if(i%rowLen===0){
          let index=i;
          this.rows.push(
            <PostRow 
              scroll={this.props.scroll}
              postRowCount={this.postRowCount} 
              postOpen={this.state.postOpen}
              openPost={this.openPost} 
              posts={[
                {index:index+0 ,val:this.state.posts[index+0]},
                {index:index+1 ,val:this.state.posts[index+1]},
                {index:index+2 ,val:this.state.posts[index+2]},
                {index:index+3 ,val:this.state.posts[index+3]},
                {index:index+4 ,val:this.state.posts[index+4]},
                {index:index+5 ,val:this.state.posts[index+5]}]}
            />
          )
          this.postRowCount++
        }
      }return this.rows
    }
  getScroll(){
    //console.log(this.props.forwardScrollRef.current.scrollHeight())
  }
  render() {
    return (
      <BoardProvider value={{state:this.state,openPost:this.openPost}}>
        <div id='imageBoard'>
          {/* this.state.posts.map(post=><PostItem/>) */}
          {this.createRows(6)}  
        </div>
      </BoardProvider>
    )
  }
}
