import { ModeToggle } from "@/components/ModeToggle"
import { ThemeProvider } from "@/components/ThemeProvider"
import { GalleryVerticalEnd } from "lucide-react"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (

    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-bold text-2xl">
          <div className="bg-black text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <img src="logo.svg" alt="" className=" w-24 rounded-full"  />
          </div>
          Kasum
        </a>
        <ModeToggle/>

        <Outlet />
      </div>
    </div>
    </ThemeProvider>
  )
}
