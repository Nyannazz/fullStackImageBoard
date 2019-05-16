import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageBoard from './reactComponents/ImageBoard.js'
import UserPage from './reactComponents/user/UserPage.js'
import NavBar from './reactComponents/NavBar.js'
import {AppProvider} from './AppContext.js'
import {BrowserRouter, Route} from 'react-router-dom';


export default class Main extends Component {
    constructor(props) {
      super(props)
      this.scrollRef=React.createRef();
      this.setScroll=this.setScroll.bind(this)
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
        <BrowserRouter>
            <AppProvider value={{state:this.state,setScroll:this.setScroll}}>
            <div className="App">
                <header className="App-header centerAll">
                    <NavBar/>
                </header>
                <main ref={this.scrollRef}>
                  <Route path='/profile' component={UserPage}/>
                  <Route exact path='/' component={ImageBoard}/>
                </main>
            </div>
            </AppProvider>
        </BrowserRouter>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Main/>, document.getElementById('example'));
}
