import { t } from "i18next"

export const About = () => {
  return (
    <>
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fff5eb] text-[#0a1e2e]">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-[#0a1e2e]">
                {t("about.history.title")}
            </h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto mb-12 text-[#0a1e2e]/80">
                {t("about.history.description")}
            </p>
            <div className="relative inline-block">
                <div className="text-8xl mb-4 text-[#0a1e2e]">✨</div>
            </div>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed mt-4">
                {t("about.history.description2")}
            </p>
        </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1e2e] text-[#fff5eb]">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#fff5eb] mb-16">
                {t("about.mission.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-8 rounded-2xl shadow-xl bg-[#fff5eb] text-[#0a1e2e] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4 text-[#0a1e2e]">🎯</div>
                    <h3 className="text-2xl font-semibold mb-4">{t("about.mission.simplify.title")}</h3>
                    <p className="leading-relaxed">
                        {t("about.mission.simplify.description")}
                    </p>
                </div>
                <div className="p-8 rounded-2xl shadow-xl bg-[#fff5eb] text-[#0a1e2e] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4 text-[#0a1e2e]">🌱</div>
                    <h3 className="text-2xl font-semibold mb-4">{t("about.mission.empower.title")}</h3>
                    <p className="leading-relaxed">
                        {t("about.mission.empower.description")}
                    </p>
                </div>
                <div className="p-8 rounded-2xl shadow-xl bg-[#fff5eb] text-[#0a1e2e] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className="text-4xl mb-4 text-[#0a1e2e]">🛡️</div>
                    <h3 className="text-2xl font-semibold mb-4">{t("about.mission.security.title")}</h3>
                    <p className="leading-relaxed">
                        {t("about.mission.security.description")}
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8e6d9] to-[#fff5eb] text-[#0a1e2e]">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#0a1e2e] mb-16">
                {t("about.members")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-[#0a1e2e] text-[#fff5eb] rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:col-2">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#fff5eb] flex items-center justify-center text-4xl text-[#0a1e2e]">👤</div>
                    <h4 className="text-xl font-semibold mb-1">Alina C.</h4>
                    <p className="text-sm text-[#fff5eb]/70">{t("about.alina")}</p>
                </div>
                <div className="text-center p-6 bg-[#0a1e2e] text-[#fff5eb] rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:col-3">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[#fff5eb] flex items-center justify-center text-4xl text-[#0a1e2e]">👩‍💻</div>
                    <h4 className="text-xl font-semibold mb-1">Felipe M.</h4>
                    <p className="text-sm text-[#fff5eb]/70">{t("about.felipe")}</p>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
