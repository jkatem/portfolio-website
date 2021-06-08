import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';


const App = () => {

  // create effect where it scrolls to a certain section on the same page
  // componentDidMount() {
  //   window.scrollTo(0, 0);
  //   document.getElementById('about').focus();
  // }

  return (
   
      <React.Fragment>
        <Header/>
        <About/>
        <div>
          <Switch>
            <Route exact path ='/' component={Home} /> 
            <Route path ='/about' component={About} />
            <Route path ='/projects' component={Project}/>
          </Switch>
        </div>

      </React.Fragment>
   

  )
}
export default App
