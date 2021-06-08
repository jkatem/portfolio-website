import React from 'react'
// import './App.css'
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom';


const App = () => {

  // create effect where it scrolls to a certain section on the same page
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  //   document.getElementById('about').focus();
  // }

  return (
    <div className="app">
      <Home />
    </div>
  )
}
export default App
