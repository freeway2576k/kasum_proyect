import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PATHS } from "@/router/PATHS";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t("auth.login_form.title")}</h1>
          <p className="text-muted-foreground text-sm text-balance">
            {t("auth.login_form.description")}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">{t("auth.login_form.email")}</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">{t("auth.login_form.password")}</FieldLabel>
            <Link
              to={PATHS.FORGOT_PASSWORD}
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              {t("auth.login_form.forgot_password")}
            </Link>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">{t("auth.login")}</Button>
        </Field>
        <FieldSeparator>{t("auth.login_form.continue_with")}</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
            {t("auth.login_with_google")}
          </Button>
          <FieldDescription className="text-center">
            {t("auth.login_form.dont_have_account")} <Link to={PATHS.SIGNUP} className="underline underline-offset-4">{t("auth.signup")}</Link>
          
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
