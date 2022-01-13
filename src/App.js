import React, {Component} from 'react';
import './App.css';
import RegSearch from './components/RegSearch';
import RandomSearch from './components/RandomSearch';
import TrendSearch from './components/TrendSearch';


// key : 6Z2L7AtMebBCoZm21F8XSLoSCzw3g0v0
class App extends Component{
  render(){
    return(
      <>
      <h1>Image Search</h1>
      <div>
       <RegSearch />
      </div>
      <br/>
      <div>
        <RandomSearch />
      </div>
      <br/>
      <div>
        <TrendSearch />
      </div>
      </>
      )
  }
}

export default App;
