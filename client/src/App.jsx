import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 onClick={() => setCount(count + 1)}>Vite + React</h1>
    <h2>Count is {count}</h2>
    </>
  )
}

export default App
