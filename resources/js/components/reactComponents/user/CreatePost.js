import React, { Component } from 'react'
import axios from 'axios'



export default class CreatePost extends Component {
    constructor(props) {
      super(props)
      this.changeFile=this.changeFile.bind(this)
      this.sendFiles=this.sendFiles.bind(this)
      this.state = {
         upload: "",
         file: ""
      }
    }
  
  changeFile(event){
    const val=event.target.files[0];
    let blob=new Blob([val])
    let objectURL=URL.createObjectURL(blob);
    this.setState({upload:objectURL,file:val})
    console.dir(val)
    
  }
  sendFiles(event){
    event.preventDefault()

    let formData=new FormData()
    formData.append('file',this.state.file)
    axios.post('http://image-board.local/posts',
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',

                }
            }
        ).then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
  }
    
  render() {
    return (
      <div className={'uploadComp'}>
      <form onSubmit={this.sendFiles} className='uploadForm'>
        <input onChange={this.changeFile} type='file'></input>
        {this.state.upload&&[
        <input type='text'></input>,
        <input type='text'></input>,
        <input type='text'></input>,
        <input type='submit'></input>]}
      </form>
      <div className={'imageContainer'}>
        <img src={this.state.upload}></img>
      </div>
      </div>
    )
  }
}
