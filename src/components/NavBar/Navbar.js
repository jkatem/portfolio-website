import React from 'react'
// import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'

// const HeaderItems = props => {
//   const { children, to="/"} = props
//   return (
//     <Text
//       display="block"
//     >
//     <Link to={to}>{children}</Link>
//     </Text>
//   )
// }

const Header = props => {
  return (
    // <>
    // <div class='container' >
    //   <div class='row'>
    //     <div class='col' >
    //     <Navbar expand="lg" class="navbar-brand">
    //       JENNIFER MIAO
    //     </Navbar>
    //     </div>
    //     <ul class="nav justify-content-end">
    //       <li>
    //         <div class='col'>
    //           <Nav.Item>
    //             <Nav.Link>About</Nav.Link>
    //           </Nav.Item>
    //         </div>
    //       </li>
    //       <li>
    //         <div class='col'>
    //         <Nav.Item>
    //           <Nav.Link>Projects</Nav.Link>
    //         </Nav.Item>
    //         </div>
    //       </li>   
    //     </ul>
    //   </div>
    // </div>
    // </>
    <>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <text>JENNIFER MIAO</text>      
        <ul class="nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
    </nav>

        </>
  )
}

export default Header

