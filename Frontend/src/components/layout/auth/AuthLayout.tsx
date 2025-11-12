import { ModeToggle } from "@/components/ModeToggle"
import { ThemeProvider } from "@/components/ThemeProvider"
import { LanguageChanger } from "@/components/translations/LanguageChanger"
import { PATHS } from "@/router/PATHS"
import { GalleryVerticalEnd } from "lucide-react"
import { Trans } from "react-i18next"
import { Link, Outlet } from "react-router-dom"

export const AuthLayout = () => {
  return (

    
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to={PATHS.HOME} className="flex items-center gap-2 font-bold text-3xl">
            <div className="bg-black text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <img
          src="/logo.svg"
          alt="Image"
          className="absolute w-10"
        />
            </div>
            Kasum
          </Link>
          <LanguageChanger/>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
        <div className="text-center text-muted-foreground">
            <Trans i18nKey="auth.login_form.terms_and_conditions"
              components={{
                termsLink: <Link to={PATHS.TERMS} className="hover:text-primary underline"></Link>,
                privacyLink: <Link to={PATHS.PRIVACY} className="hover:text-primary underline"></Link>,
              }}></Trans>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/background.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
