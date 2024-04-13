import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Editor from './views/Editor'
import New from './views/New'


function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path="/scene" element={<Editor />} />
      </Routes>
    </Router>
  )
}

export default App
