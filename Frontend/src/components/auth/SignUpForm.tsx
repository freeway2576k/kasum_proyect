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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { t } = useTranslation();
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{t("auth.signup_form.title")}</h1>
          <p className="text-muted-foreground text-sm text-balance">
            {t("auth.signup_form.description")}
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="first-name">{t("auth.signup_form.first_name")}</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">{t("auth.signup_form.last_name")}</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">{t("auth.signup_form.email")}</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
          <FieldDescription>
            {t("auth.signup_form.email_description")}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">{t("auth.signup_form.password")}</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            {t("auth.signup_form.password_description")}
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">{t("auth.signup_form.confirm_password")}</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>{t("auth.signup_form.confirm_password_description")}</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">{t("auth.signup_form.create_account")}</Button>
        </Field>
        <FieldSeparator>{t("auth.signup_form.or_continue_with")}</FieldSeparator>
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
          <FieldDescription className="px-6 text-center">
            {t("auth.signup_form.already_have_account")} <Link to={PATHS.LOGIN}>{t("auth.login")}</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
