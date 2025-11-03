
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PublicLayout } from './components/layout/public/PublicLayout'
import { Home } from './views/public/Home'
import {  PATHS } from './router/appRoutes'
import { DashboardLayout } from './components/layout/dashboard/DashboardLayout'
import { Dashboard } from './views/public/Dashboard'

function App() {

  return (
    <>
     <Routes>
      <Route element={<PublicLayout/>}>
        <Route path={PATHS.HOME} element={<Home/>} />
      </Route>
      <Route element={<DashboardLayout/>}>
        <Route path={PATHS.DASHBOARD} element={<Dashboard/>} />

      </Route>
     </Routes>
    </>
  )
}

export default App
