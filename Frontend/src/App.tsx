import { ThemeProvider } from "./components/ThemeProvider"
import { AppRouter } from "./router/AppRouter"

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <AppRouter></AppRouter>

    </ThemeProvider>
    </>
  )
}

export default App
