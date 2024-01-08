import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='counter'>
        <div>
          <h1>{count}</h1>

        </div>
        <div>
          <button onClick={()=>setCount(count + 1)}>Increase</button>
          <button onClick={()=>setCount(count - 1)}>Decrease</button>
        </div>
      </div>
    </>
  )
}

export default App
