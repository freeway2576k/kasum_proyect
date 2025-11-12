import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PATHS } from "@/router/PATHS";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Home = () => {
    const { t } = useTranslation();
  return (
    <>
      <header className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-background/80 to-background/50">
        <img src="/background.jpg" alt="Background" className="h-screen w-full object-cover"/>
        </div>
        <div className="absolute w-full h-full top-0 left-0 z-1 bg-muted/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-in leading-tight text-secondary-foreground">
            {t("home.title")}
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in-delay text-secondary-foreground drop-shadow-lg">
            {t("home.description")}
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="login"
              className="bg-primary text-secondary px-8 pt-3 pb-2 rounded-full font-semibold text-lg hover:bg-muted hover:text-primary transition-all duration-500 transform hover:scale-110 shadow-lg"
            >
                {t("home.button")}
            </Link>
          </div>
        </div>
      </header>
      <Separator className="border border-muted"></Separator>
      
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
                    {t("home.features.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        className="relative bg-card text-foreground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-5xl mb-6 animate-bounce">💸</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.1.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.1.description")}
                        </p>
                    </div>
                    <div
                        className="relative bg-card text-foreground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-[#fff5eb] text-5xl mb-6 animate-bounce">📊</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.2.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.2.description")}
                        </p>
                    </div>
                    <div
                        className="relative bg-card text-foreground p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-[#fff5eb] text-5xl mb-6 animate-bounce">🏦</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.3.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.3.description")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Separator className="border border-muted"></Separator>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-secondary-foreground text-4xl sm:text-5xl font-bold text-center mb-16 animate-fade-in">{t("home.testimonials.title")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        className="bg-card text-foreground p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.1.description")}"</p>
                        <p className="font-semibold">— Ana G.</p>
                    </div>
                    <div
                        className="bg-card text-foreground p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.2.description")}"</p>
                        <p className="font-semibold">— Carlos M.</p>
                    </div>
                    <div
                        className="bg-card text-foreground p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.3.description")}"</p>
                        <p className="font-semibold">— Laura P.</p>
                    </div>
                </div>
            </div>
        </section>
        <Separator className="border border-muted"></Separator>
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-secondary-foreground mb-16 animate-fade-in tracking-tight">
                    {t("home.plans.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                    <Card className="flex justify-between bg-linear-to-br from-card-gradient-start to-card-gradient-end text-secondary-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <CardHeader>
                            <CardDescription className="text-2xl font-semibold mb-4">{t("home.plans.1.title")}</CardDescription>
                            <CardTitle className="text-4xl font-bold mb-4">{t("home.plans.1.price")}</CardTitle>
                            <CardDescription className="mb-6">{t("home.plans.1.description")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.3")}</li>
                        </ul>
                        </CardContent>
                        <CardFooter className="">
                        <Link to={PATHS.LOGIN}
                            >
                                <Button className="bg-foreground text-secondary rounded-full text-xl font-semibold hover:bg-muted hover:text-secondary-foreground  transition-all duration-300 transform">{t("home.plans.1.button")}</Button>
                            
                        </Link>
                        </CardFooter>
                    </Card>
                    <Card className="flex justify-between bg-linear-to-br from-card-gradient-start to-card-gradient-end text-secondary-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <CardHeader>
                            <CardDescription className="text-2xl font-semibold mb-4">{t("home.plans.2.title")}</CardDescription>
                            <CardTitle className="text-4xl font-bold mb-4">{t("home.plans.2.price")}</CardTitle>
                            <CardDescription className="mb-6">{t("home.plans.2.description")}</CardDescription>
                            <CardAction>
                                <Badge className="bg-primary text-secondary text-md">{t("home.plans.2.badge")}</Badge>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.3")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.4")}</li>
                        </ul>
                        </CardContent>
                        <CardFooter>
                        <Link to={PATHS.LOGIN}
                            className=" ">
                                <Button  className=" bg-primary text-secondary rounded-full text-xl font-semibold hover:bg-muted hover:text-primary  transition-all duration-300 transform">{t("home.plans.2.button")}</Button>
                            
                        </Link>
                        </CardFooter>
                    </Card>
                    <Card className="flex justify-between bg-linear-to-br from-card-gradient-start to-card-gradient-end text-secondary-foreground rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <CardHeader>
                            <CardDescription className="text-2xl font-semibold mb-4">{t("home.plans.3.title")}</CardDescription>
                            <CardTitle className="text-4xl font-bold mb-4">{t("home.plans.3.price")}</CardTitle>
                            <CardDescription className="mb-6">{t("home.plans.3.description")}</CardDescription>
                            
                        </CardHeader>
                        <CardContent>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.3")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.4")}</li>
                        </ul>
                        </CardContent>
                        <CardFooter>
                        <Link to={PATHS.LOGIN}
                            className=" ">
                                <Button className="bg-foreground text-secondary rounded-full text-xl font-semibold hover:bg-muted hover:text-secondary-foreground  transition-all duration-300 transform">{t("home.plans.3.button")}</Button>
                            
                        </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    </>
  );
};
