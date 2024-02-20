import { useState } from 'react'
import viteLogo from './assets/vite.svg'
import Drawer from '@mui/material/Drawer'
import Paper from '@mui/material/Paper'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [openDrawer, setopenDrawer] = useState(false)

  const toggleDrawer = ()=>{
    setopenDrawer((prevState) => !prevState);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <>
        <button onClick={() => toggleDrawer()}>
          {openDrawer? 'Close Drawer': 'Open Drawer'}
        </button>
        <Drawer
            anchor='right'
            open={openDrawer}
            onClose={toggleDrawer}
            PaperProps={{style: {backgroundColor: 'yellow'}}}
          >
            <p>
          Edit  HMR
        </p>
          </Drawer>
      </>
    </div>
  )
}

export default App
