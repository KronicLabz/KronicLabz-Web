import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import Menu from './components/Menu'
import Home from './components/Home'
import Services from './components/Services'
import Team from './components/Team'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppWrapper>
          <Menu />
          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Services}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/roadmap' component={Roadmap}/>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
    )
  }
}

export default App
