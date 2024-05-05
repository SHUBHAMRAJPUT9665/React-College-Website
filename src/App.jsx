import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Applayout from './Applayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Applayout />
    </>
  )
}

export default App
