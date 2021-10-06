import React from "react";
import Header from './components/NavBar/Header'
import About from './components/About'
import Carousel from './components/Carousel/Carousel'
import { SliderData } from './components/Carousel/SliderData'
// import 


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.main = React.createRef();
  // }

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
        <Carousel projects={SliderData} />
      </div>
      </>
    );
  }
}
export default App

