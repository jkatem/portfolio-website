// import React from "react";
// import Navbar from './components/NavBar/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Project from './components/Project'
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import "./styles.css";

// const styles = {
//   link: { textDecoration: "none", color: "black" },
//   // nav: { border: "1px solid blue" },
//   home: { height: "auto", width: "auto" },
//   about: { height: "auto", width: "auto", borderTop: "1px solid #f6921e"},
//   projects: {borderTop: "1px solid #f6921e"}
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.main = React.createRef();
//   }
//   renderMain() {
//     return (
//       <div style={styles.component}>
//         <div style={styles.home}>
//           <Home />
//         </div>
//         <div style={styles.about} ref={this.main}>
//           <h2>ABOUT</h2>
//           <About />
//         </div>
//         <div style={styles.projects} ref={this.main}>
//           <h2>My Latest Projects</h2>
//           <Project />
//         </div>
//         <div>
//             <p>Interested in learning more?</p>
//             <a href="https://www.linkedin.com/in/jenmiao" class="orangebutton linkedin w-button">LinkedIn</a>
//             <a href="https://github.com/jkatem" class="orangebutton linkedin w-button">Github</a>

//         </div>
//       </div>
//     );
//   }
//   handleScroll = e => {
//     e.preventDefault();
//     const main = this.main.current;
//     window.scrollTo({
//       top: main.offsetTop,
//       left: 0,
//       behavior: "instant"
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <div>
//             <div style={styles.nav}>
//               <Link style={styles.link} to="/">
//                 Home{" "}
//               </Link>
//               <Link style={styles.link} onClick={this.handleScroll} to="/about">
//                 About{" "}
//               </Link>
//               <Link style={styles.link} onClick={this.handleScroll} to="/projects">
//                 Projects{" "}
//               </Link>
//             </div>

//             <Switch>
//               <Route exact path="/" component={() => this.renderMain()} />
//               {/* <Route exact path="/contact" render={() => <h1>Contact Us</h1>} /> */}
//               <Route render={() => <h1>Page not found</h1>} />
//             </Switch>
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
// export default App

import React from 'react';
import About from './components/About'
import Project from './components/Project'

import Navbar from './components/NavBar/Navbar'
import Footer from './components/Footer/Footer'
import { Flex, Box, Stack } from "@chakra-ui/react"

const styles = {
  link: { textDecoration: "none", color: "black" },
  // nav: { border: "1px solid blue" },
  home: { height: "auto", width: "auto" },
  about: { height: "auto", width: "auto", borderTop: "1px solid #f6921e"},
  projects: {borderTop: "1px solid #f6921e"}
};


function App() {
  return (
    <>
    <Flex>
      <Box w="100%" >
        <Navbar />
        
      </Box>
    </Flex>
    <About />
    <Project />
    <Box>
      <Footer />
    </Box>

    {/* <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Footer />
        </Stack>
      </Stack>
    </Box> */}
    </>
  )
}
export default App