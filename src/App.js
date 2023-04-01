import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Homescreen from './components/Homescreen'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Links from './components/Links';
import Tictactoe from './components/Tictactoe';
import Maze from './components/Maze';
import Codeboy from './components/Codeboy';

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
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/links" element={<Links/>}/>
          <Route path="/tictactoe" element={<Tictactoe/>}/>
          <Route path="/maze" element={<Maze/>}/>
          <Route path="/codeboy" element={<Codeboy/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
