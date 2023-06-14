import './App.css'
import { TableNewDetails } from './components/TableNewDetails'
import { Tables } from './components/Tables'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { TableProvider } from './contexts/TableContext'
import { Reviews } from './components/Reviews'
import { Collections } from './components/Collections'

function App() {
  return (
    <>
      <TableProvider>
        <h1>Discover movies</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tables />} />
            <Route path="/movie/:id" index element={<TableNewDetails />} />
            <Route path="/movie/:id/reviews" index element={<Reviews />} />
            <Route path="/movie/:id/collection/:collId" index element={<Collections />} />
          </Routes>
        </BrowserRouter>
      </TableProvider>
    </>
  )
}

export default App
