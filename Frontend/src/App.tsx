
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PublicLayout } from './components/layout/public/PublicLayout'
import { Home } from './views/public/Home'
import {  PATHS } from './router/appRoutes'
import { DashboardLayout } from './components/layout/dashboard/DashboardLayout'
import { Dashboard } from './views/public/Dashboard'
import { AuthLayout } from './components/layout/auth/AuthLayout'
import { Login } from './views/auth/Login'
import { LoginForm } from './components/login-form'

function App() {

  return (
    <>
    
     <Routes>
      {/* Parte de la navegación pública */}
      <Route element={<PublicLayout/>}>
        <Route path={PATHS.HOME} element={<Home/>} />
      </Route>

      {/* Parte de autenticacion */}
      <Route element={<AuthLayout/>}>
        <Route path={PATHS.LOGIN} element={<LoginForm/>} />
        <Route path={PATHS.LOGINV2} element={<Login/>} />
      </Route>

      {/* Parte de la navegación privada */}
      <Route element={<DashboardLayout/>}>
        <Route path={PATHS.DASHBOARD} element={<Dashboard/>} />
      </Route>

     </Routes>
    </>
  )
}

export default App
