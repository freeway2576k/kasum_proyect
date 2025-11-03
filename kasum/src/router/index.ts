// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Inicio from '../pages/Inicio.vue'
import Transacciones from '../pages/Transacciones.vue'
import Login from '../pages/Login.vue'
import InfoPage from '../pages/InfoPage.vue'
import Registro from '../pages/Registro.vue'
import GestionUsuarios from '../pages/GestionUsuarios.vue'
import Ahorros from '../pages/MisAhorros.vue'
import Ajustes from '../pages/Ajustes.vue'
import { useUserStore } from '../store/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/inicio',
    name: 'Home',
    component: Inicio,
    
  },
  {
    path: '/transacciones',
    name: 'Transacciones',
    component: Transacciones,
    
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    name: 'InfoPage',
    component: InfoPage,
    meta: { requiresAuth: false }
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
    meta: { requiresAuth: false }
  },
  {
    path: '/gestus',
    name: 'GestionUsuarios',
    component: GestionUsuarios,
    
  },
  {
    path: '/ahorros',
    name: 'Ahorros',
    component: Ahorros,
    
  },
  {
    path: '/ajustes',
    name: 'Ajustes',
    component: Ajustes,
    
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router