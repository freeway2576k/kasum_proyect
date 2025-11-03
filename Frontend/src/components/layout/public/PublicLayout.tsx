import { Outlet } from "react-router-dom"
import PublicNavbar from "@/components/PublicNavbar"


export const PublicLayout = () => {
  return (
    <div>
        <PublicNavbar></PublicNavbar>
        <main className="">
            <Outlet></Outlet>
        </main>
    </div>
  )
}
