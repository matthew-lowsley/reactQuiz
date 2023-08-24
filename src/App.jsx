import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li>
          <h2 class="question">Question 1:</h2>
          <input type="text" class="ans-box"></input>
          <button class="ans-btn">Submit</button>
        </li>
        <li>
          <h2 class="question">Question 2:</h2>
          <input type="text" class="ans-box"></input>
          <button class="ans-btn">Submit</button>
        </li>
        <li>
          <h2 class="question">Question 3:</h2>
          <input type="text" class="ans-box"></input>
          <button class="ans-btn">Submit</button>
        </li>
        <li>
          <h2 class="question">Question 4:</h2>
          <input type="text" class="ans-box"></input>
          <button class="ans-btn">Submit</button>
        </li>
      </ul>
    </>
  )
}

export default App
