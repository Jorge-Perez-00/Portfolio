import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';

class App extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
    }

  }



  render() {
    return (
      <div className='App' >
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
