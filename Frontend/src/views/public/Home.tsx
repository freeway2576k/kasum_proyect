import { PATHS } from "@/router/PATHS";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Home = () => {
    const { t } = useTranslation();
  return (
    <>
      <header className="bg relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#0a1e2e]/80 to-[#0a1e2e]/50">
        <img src="/background.jpg" alt="Background" className="h-screen w-full object-cover"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-slide-in leading-tight text-[#fff5eb]">
            {t("home.title")}
          </h1>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in-delay text-[#fff5eb]">
            {t("home.description")}
          </p>
          <div className="flex justify-center gap-6">
            <Link
              to="login"
              className="bg-[#fff5eb] text-[#0a1e2e] px-8 pt-3 pb-2 rounded-full font-semibold text-lg hover:bg-[#fff5eb]/80 transition-all duration-500 transform hover:scale-110 shadow-lg"
            >
                {t("home.button")}
            </Link>
          </div>
        </div>
      </header>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fff5eb]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0a1e2e] mb-16 animate-fade-in">
                    {t("home.features.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        className="relative bg-[#0a1e2e] text-[#fff5eb] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-[#fff5eb] text-5xl mb-6 animate-bounce">💸</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.1.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.1.description")}
                        </p>
                    </div>
                    <div
                        className="relative bg-[#0a1e2e] text-[#fff5eb] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-[#fff5eb] text-5xl mb-6 animate-bounce">📊</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.2.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.2.description")}
                        </p>
                    </div>
                    <div
                        className="relative bg-[#0a1e2e] text-[#fff5eb] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                        <div className="text-[#fff5eb] text-5xl mb-6 animate-bounce">🏦</div>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.features.3.title")}</h3>
                        <p className="leading-relaxed">
                            {t("home.features.3.description")}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1e2e] text-[#fff5eb] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fff5eb]/10 to-[#0a1e2e]/80"></div>
            <div className="relative max-w-7xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 animate-fade-in">{t("home.testimonials.title")}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div
                        className="bg-[#fff5eb] text-[#0a1e2e] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.1.description")}"</p>
                        <p className="font-semibold">— Ana G.</p>
                    </div>
                    <div
                        className="bg-[#fff5eb] text-[#0a1e2e] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.2.description")}"</p>
                        <p className="font-semibold">— Carlos M.</p>
                    </div>
                    <div
                        className="bg-[#fff5eb] text-[#0a1e2e] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                        <p className="italic mb-6 text-lg">"{t("home.testimonials.3.description")}"</p>
                        <p className="font-semibold">— Laura P.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fff5eb] to-[#f8e6d9]">
            <div className="max-w-7xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-extrabold text-center text-[#0a1e2e] mb-16 animate-fade-in tracking-tight">
                    {t("home.plans.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        className="relative bg-gradient-to-br from-[#0a1e2e] to-[#1a3c5e] text-[#fff5eb] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <h3 className="text-2xl font-semibold mb-4">{t("home.plans.1.title")}</h3>
                        <p className="text-4xl font-bold mb-4">{t("home.plans.1.price")}</p>
                        <p className="mb-6 text-[#fff5eb]/80">{t("home.plans.1.description")}</p>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.1.features.3")}</li>
                        </ul>
                        <Link to={PATHS.LOGIN}
                            className="w-full bg-[#fff5eb] text-[#0a1e2e] px-6 pt-3 pb-2  rounded-full font-semibold hover:bg-[#fff5eb]/80 transition-all duration-300 transform ">
                            {t("home.plans.1.button")}
                        </Link>
                    </div>
                    <div
                        className="relative bg-gradient-to-br from-[#0a1e2e] to-[#1a3c5e] text-[#fff5eb] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <span
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold px-4 py-1 rounded-full">{t("home.plans.2.title")}</span>
                        <h3 className="text-2xl font-semibold mb-4">{t("home.plans.2.title")}</h3>
                        <p className="text-4xl font-bold mb-4">{t("home.plans.2.price")}</p>
                        <p className="mb-6 text-[#fff5eb]/80">{t("home.plans.2.description")}</p>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.3")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span> {t("home.plans.2.features.4")}</li>
                        </ul>
                        <Link to={PATHS.LOGIN}
                            className="w-full bg-amber-500 text-white pt-3 pb-2 pr-2 pl-2  rounded-full font-semibold hover:bg-amber-500/80 transition-all duration-300 transform">
                            {t("home.plans.2.button")}
                        </Link>
                    </div>
                    <div
                        className="relative bg-gradient-to-br from-[#0a1e2e] to-[#1a3c5e] text-[#fff5eb] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#fff5eb]/20">
                        <h3 className="text-2xl font-semibold mb-4">{t("home.plans.3.title")}</h3>
                        <p className="text-4xl font-bold mb-4">{t("home.plans.3.price")}</p>
                        <p className="mb-6 text-[#fff5eb]/80">{t("home.plans.3.description")}</p>
                        <ul className="mb-6 space-y-2 text-sm">
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.1")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.2")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.3")}</li>
                            <li className="flex items-center"><span className="mr-2">✔</span>  {t("home.plans.3.features.4")}</li>
                        </ul>
                        <Link to={PATHS.LOGIN}
                            className="w-full bg-[#fff5eb] text-[#0a1e2e] px-6 pt-3 pb-2  rounded-full font-semibold hover:bg-[#fff5eb]/80 transition-all duration-300 transform">
                            {t("home.plans.3.button")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
