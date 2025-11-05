import { PublicLayout } from '@/components/layout/public/PublicLayout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATHS } from './PATHS'
import { LoginForm } from '@/components/auth/LoginForm'
import { AuthLayout } from '@/components/layout/auth/AuthLayout'
import { DashboardLayout } from '@/components/layout/dashboard/DashboardLayout'
import { Login } from '@/views/auth/Login'
import { Dashboard } from '@/views/public/Dashboard'
import { SignupForm } from '@/components/auth/SignUpForm'
import { Home } from '@/views/public/Home'
import { About } from '@/views/public/About'
import { Contact } from '@/views/public/Contact'
import { TermsAndConds } from '@/views/public/TermsAndConds'

export const AppRouter = () => {
  return (
    <Routes>
      {/* Parte de la navegación pública */}
      <Route element={<PublicLayout/>}>
        <Route path={PATHS.HOME} element={<Home/>} />
        <Route path={PATHS.ABOUT} element={<About/>} />
        <Route path={PATHS.CONTACT} element={<Contact/>} />
        <Route path={PATHS.TERMS} element={<TermsAndConds/>} />
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
