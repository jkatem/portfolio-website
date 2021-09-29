import React from "react";
import Header from './components/NavBar/Header'
import About from './components/About'
import Project from './components/Project'
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.main = React.createRef();
  }

  render() {
    return (
      <>
      <nav class="navbar navbar-light">
        <Header/>
      </nav>
      <div>
        <h2>ABOUT</h2>
        <About />
      </div>
      <div>
        <h2>My Latest Projects</h2>
        <Project />
      </div>
      {/* </div> */}

      </>
    );
  }
}
export default App

