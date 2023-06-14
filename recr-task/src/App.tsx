import './App.css'
import { TableDetails } from './components/TableDetails'
import { Tables } from './components/Tables'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { TableProvider } from './contexts/TableContext'

function App() {
  return (
    <>
      <TableProvider>
        <h1>Discover movies</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tables />} />
            <Route path="/movie/:id" index element={<TableDetails />} />
          </Routes>
        </BrowserRouter>
      </TableProvider>
    </>
  )
}

export default App
