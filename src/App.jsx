import { Suspense } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'



function App() {

  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>

          </Route>
        </Routes>
      </Suspense>

      
    </div>
  )
}

export default App
