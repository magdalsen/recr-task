import { BrowserRouter,Route, Routes } from 'react-router-dom'

import Breadcrumbs from './components/Breadcrumbs'
import { CollectionDetails } from './components/CollectionDetails'
import { Collections } from './components/Collections'
import { Reviews } from './components/Reviews'
import { TableNewDetails } from './components/TableNewDetails'
import { Tables } from './components/Tables'
import { TableProvider } from './contexts/TableContext'

import './App.css'

const App = () => {

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
            {routes.map(({ path, Component }) => (
              <Route index path={path} key={path} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </TableProvider>
    </>
  )
}

export default App
