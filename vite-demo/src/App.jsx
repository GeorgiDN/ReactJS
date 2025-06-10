import { useState } from 'react'
import Header from "./header.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MainHeader from "./MainHeader.jsx";
import SecondHeader from './SecondHeader.jsx'

import FunctionExpression from './FunctionExpression';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <header>
          <MainHeader />
          <FunctionExpression />
        </header>
  )
}

export default App
