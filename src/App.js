import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import Post from './Components/Post/Post';
import {originals, action} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Post url = {originals} title = 'Netflix originals'/>
      <Post url = {action} title = 'Action' isSmall />
    </div>
  );
}

export default App;
