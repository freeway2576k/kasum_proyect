import { MapBox } from "@/components/MapBox";
import { PATHS } from "@/router/PATHS"
import { useTranslation } from "react-i18next";
export const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#fff5eb] text-[#0a1e2e]">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-4 leading-tight">
                        {t("contact.main.title")}
                    </h1>
                    <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-16 text-center text-[#0a1e2e]/80">
                        {t("contact.main.subtitle")}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8 p-6 lg:p-10 bg-white rounded-2xl shadow-xl">
                            <h3 className="text-3xl font-bold text-[#0a1e2e] mb-6">
                                {t("contact.info.title")}
                            </h3>

                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-amber-500">📞</span>
                                <div>
                                    <p className="font-semibold">{t("contact.info.phone.label")}</p>
                                    <p className="text-lg">+(34) 91 555 1234</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-amber-500">✉️</span>
                                <div>
                                    <p className="font-semibold">{t("contact.info.email.label")}</p>
                                    <p className="text-lg">soporte@kasum.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <span className="text-2xl text-amber-500">📍</span>
                                <div>
                                    <p className="font-semibold">{t("contact.info.address.label")}</p>
                                    <p className="text-lg">Calle Ficticia, 123, Madrid, España</p>
                                </div>
                            </div>
                            <p className="pt-4 text-sm text-gray-600">
                                {t("contact.info.schedule")}
                            </p>
                        </div>
                        <div className="p-0 bg-white rounded-2xl shadow-xl overflow-hidden">
                            <h3 className="text-3xl font-bold text-[#0a1e2e] p-6 lg:p-10 pb-2">
                                {t("contact.map.title")}
                            </h3>
                            <div className="w-full h-78">
                                <div className="w-full h-full">
                                    <MapBox></MapBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1e2e] text-[#fff5eb]">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-[#fff5eb]">
                        {t("contact.faq.title")}
                    </h2>
                    <p className="text-lg max-w-4xl mx-auto mb-12 text-[#fff5eb]/80">
                        {t("contact.faq.description")}
                    </p>
                    <div className="mt-8">
                        <a href={PATHS.FAQ}
                            className="inline-block bg-amber-500 text-white px-8 pt-3 pb-2 rounded-full font-semibold text-lg hover:bg-amber-600 transition-all duration-300 shadow-lg">
                            {t("contact.faq.button")}
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
