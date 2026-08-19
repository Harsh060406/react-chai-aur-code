import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Harsh"
  }
  let arr = [1,2,3]
  return (
    <Card username="Harsh" someObj = {arr} age = "20" />
  )
}

export default App
