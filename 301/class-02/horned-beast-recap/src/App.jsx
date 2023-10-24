import './App.css'
import Gallery from './components/Gallery'
import beastArr from './Data'

function App() {

  return (
    <>
      <Gallery beasts={beastArr}/>
    </>
  )
}

export default App
