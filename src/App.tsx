import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Editor from './views/Editor'


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  )
}

export default App
