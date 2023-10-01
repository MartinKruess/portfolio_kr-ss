import './App.scss'

import { Navi } from './comps/navi'
import { Home } from './comps/home'
import { About } from './comps/about'
import { Skills } from './comps/skills'
import { Projects } from './comps/projects'
import { Contact } from './comps/contact'

function App(prop) {

  return (
    <main className="App">
      <Navi />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
