import './App.css'
import { TableNewDetails } from './components/TableNewDetails'
import { Tables } from './components/Tables'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { TableProvider } from './contexts/TableContext'
import { Reviews } from './components/Reviews'
import { Collections } from './components/Collections'
import { CollectionDetails } from './components/CollectionDetails'
import Breadcrumbs from './components/Breadcrumbs'

function App() {

  const routes = [
    {
      path: "/",
      name: "Tables",
      Component: Tables
    },
    {
      path: "/:id",
      name: "TableNewDetails",
      Component: TableNewDetails
    },
    {
      path: "/:id/reviews",
      name: "Reviews",
      Component: Reviews
    },
    {
      path: "/:id/:collId",
      name: "Collections",
      Component: Collections
    },
    {
      path: "/:id/:collId/details",
      name: "CollectionDetails",
      Component: CollectionDetails
    }
  ];

  return (
    <>
      <TableProvider>
        <BrowserRouter>
        <Breadcrumbs />
        <h1>Discover movies</h1>
          <Routes>
            {routes.map(({ path, Component }, key) => (
              <Route index path={path} key={key} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </TableProvider>
    </>
  )
}

export default App
