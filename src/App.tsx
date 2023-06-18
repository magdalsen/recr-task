import { lazy, Suspense } from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

import { TableProvider } from './contexts/TableContext'

import './App.css'

const CollectionDetails = lazy(() => import("./components/CollectionDetails"));
const Collections = lazy(() => import("./components/Collections"));
const Reviews = lazy(() => import("./components/Reviews"));
const TableNewDetails = lazy(() => import("./components/TableNewDetails"));
const Tables = lazy(() => import("./components/Tables"));
const Breadcrumbs = lazy(() => import("./components/Breadcrumbs"));

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
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route index path={path} key={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TableProvider>
    </>
  )
}

export default App
