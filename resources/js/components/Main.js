import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageBoard from './reactComponents/ImageBoard.js'
import NavBar from './reactComponents/NavBar.js'


export default class Main extends Component {
    constructor(props) {
      super(props)
      this.scrollRef=React.createRef();
      this.state = {
         
      }
    }
    setScroll(amount){
        const offset=-80;
        const currentScroll=this.scrollRef.current.scrollTop;
        this.scrollRef.current.scroll(0,currentScroll+amount+offset);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header centerAll">
                    <NavBar/>
                </header>
                <main ref={this.scrollRef}>
                    <ImageBoard scroll={this.setScroll.bind(this)} />
                </main>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main />, document.getElementById('example'));
}
