import './App.css'
import { TableDetails } from './components/TableDetails'
import { Tables } from './components/Tables'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Favorite movies</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/movie/:id" index element={<TableDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
