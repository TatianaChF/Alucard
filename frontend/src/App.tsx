import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <h4>Тут header!</h4>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
