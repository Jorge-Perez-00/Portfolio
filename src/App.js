import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Homescreen from './components/Homescreen'


class App extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      transition: false,
    }

  }

  playTransitionAnimation = () => {
    this.setState({
      transition: true
    })

    this.timeout = setTimeout(() => {
      this.setState({
        transition: false
      })
    },2000)

  }


  render() {
    return (
      <div className='App' >

        {this.state.transition &&
            <>
              <div className='top-half'>
              </div>

              <div className='bottom-half'>
              </div>
            </> 
           
        }
       
        <Routes>
          <Route path="/" element={<Homescreen onStart={this.playTransitionAnimation} />}  />
          <Route path="/home" element={<Homepage/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
