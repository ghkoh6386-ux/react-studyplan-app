import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import ClassPage from './pages/ClassPage.jsx'
import TodoPage from './pages/TodoPage.jsx'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/class' element={<ClassPage/>} />
          <Route path='/todo' element={<TodoPage/>} />
        </Routes>
      </main>
    
      <Footer/>
    </div>
  )
}

export default App
