import React from 'react'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";


class Header extends React.Component {

  constructor(props){
    super(props);
    this.main = React.createRef();
  }

  handleScroll = e => {
    e.preventDefault();
    // console.log("clicked handleScroll")
    
  };


  render() {
  return (
    <>
    <nav class="navbar">
      <text style={{color:"black", fontSize:"30px"}}>JENNIFER MIAO | Software Engineer</text>      
        <BrowserRouter>
          <ul class="nav ml-auto">
              <Link to="/">
                Home
              </Link>
              <Link onClick={this.handleScroll} to="/about">
                About{" "}
              </Link>
              <Link onClick={this.handleScroll} to="/projects">
                Projects{" "}
              </Link>


          </ul>
        </BrowserRouter>
        </nav> 
    </>
  )
  }
}

export default Header


