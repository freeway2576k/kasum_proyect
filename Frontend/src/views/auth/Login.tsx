import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a1e2e]">
        <div
            className="relative max-w-md w-full bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff5eb]/10 to-[#0a1e2e]/10 rounded-3xl -z-10"></div>

            <h1 className="text-4xl font-extrabold text-[#0a1e2e] text-center mb-10">
                Bienvenido
            </h1>

            <div className="space-y-8">
                <div className="relative">
                    <input v-model="email" type="text" placeholder="Email"
                        className="w-full p-4 pl-12 rounded-xl border-none bg-[#fff5eb]/80 text-[#0a1e2e] placeholder-[#0a1e2e]/50 focus:ring-4 "
                        aria-label="Correo electrónico" />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1e2e]/50" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 8l9 6 9-6m0 10V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2z" />
                    </svg>
                </div>

                <div className="relative">
                    <input v-model="password" type="password" placeholder="Contraseña"
                        className="w-full p-4 pl-12 rounded-xl border-none bg-[#fff5eb]/80 text-[#0a1e2e] placeholder-[#0a1e2e]/50 focus:ring-4 "
                        aria-label="Contraseña" />
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0a1e2e]/50" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 11c0-1.1-.9-2-2-2s-2 .9-2 2v2h4v-2zm6 5v-2a6 6 0 00-12 0v2a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2v-2a2 2 0 00-2-2z" />
                    </svg>
                </div>

                <button
                    className="w-full bg-gradient-to-r from-[#0a1e2e] to-[#1e3a5f] text-white py-4 rounded-xl font-semibold text-lg hover:bg-gradient-to-r hover:from-[#1e3a5f] hover:to-[#0a1e2e] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                    Iniciar Sesión
                </button>
                <div v-if="error" className="text-red-600 text-center mt-2">{}</div>
            </div>

            <p className="mt-8 text-center text-sm text-[#0a1e2e]/80">
                ¿No tienes cuenta?
                <Link to="/registro"
                    className="text-[#0a1e2e] font-semibold hover:underline hover:text-[#1e3a5f] transition-colors">Regístrate</Link>
            </p>
        </div>
    </div>
)
}
