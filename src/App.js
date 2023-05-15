import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Homepage from './components/Homepage';
import Homescreen from './components/Homescreen'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills';
import Tictactoe from './components/Tictactoe';
import Maze from './components/Maze';
import Codeboy from './components/Codeboy';
import Singlepage from './components/Singlepage';

class App extends Component{ 
  constructor(props) {
    super(props);
    this.state = {
      //color: "skyblue",
      //display: 0,
    }

  }

  /*
  setColor = (COLOR) => {
    this.setState({
      color: COLOR
    })
  }

  setDisplay = (DISPLAY) => {
    this.setState({
      display: DISPLAY
    })
  }
  */







  render() {
    return (
      <div className='App' >
        <Routes>
          <Route path="/" element={<Homescreen/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/tictactoe" element={<Tictactoe/>}/>
          <Route path="/maze" element={<Maze/>}/>
          <Route path="/codeboy" element={<Codeboy/>}/>
          <Route path="/singlepage" element={<Singlepage />} />
        </Routes>
      </div>
    )
  }
}

export default App;
