import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(15)

  const increment = () => {
    if(counter < 20) setCounter(counter + 1)
  }

  const decrement = () => {
    if(counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
