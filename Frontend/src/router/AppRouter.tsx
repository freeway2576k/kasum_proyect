import { PublicLayout } from '@/components/layout/public/PublicLayout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from './PATHS'
import { LoginForm } from '@/components/auth/LoginForm'
import { AuthLayout } from '@/components/layout/auth/AuthLayout'
import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { Login } from '@/views/auth/Login'
import { Dashboard } from '@/views/public/Dashboard'
import { Home } from 'lucide-react'
import { SignupForm } from '@/components/auth/SignUpForm'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Parte de la navegación pública */}
      <Route element={<PublicLayout/>}>
        <Route path={PATHS.HOME} element={<Home/>} />
      </Route>

      {/* Parte de autenticacion */}
      <Route element={<AuthLayout/>}>
        <Route path={PATHS.LOGIN} element={<LoginForm/>} />
        <Route path={PATHS.LOGINV2} element={<Login/>} />
        <Route path={PATHS.SIGNUP} element={<SignupForm/>} /> 
      </Route>

      {/* Parte de la navegación privada */}
      <Route element={<DashboardLayout/>}>
        <Route path={PATHS.DASHBOARD} element={<Dashboard/>} />
      </Route>

     </Routes>
  )
}
