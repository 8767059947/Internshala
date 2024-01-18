import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAppBar from './Navbar'
import Component2 from './Component2'
import Card from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonAppBar/>
    <br />
    <Component2/>
    <br /><br />
    <Card/>
    <br /><br /> <br /> <br />
     <Component4/>
     <br /><br /><br /><br />
     <Component5/>
  
       
    </>
  )
}

export default App
