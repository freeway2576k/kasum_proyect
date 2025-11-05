import { Separator } from '@/components/ui/separator';
import { useTranslation } from 'react-i18next';

export const TermsAndConds = () => {
    const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#fff5eb] text-[#0a1e2e]">
    <div className="max-w-6xl mx-auto">
        
        {/* Encabezado Principal */}
        <header className="text-center mb-12 md:mb-16">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
                {t("terms.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-[#0a1e2e]/80">
                {t("terms.last_updated")}
            </p>
        </header>

        {/* Contenido Completo de Términos y Condiciones */}
        <div className="space-y-12 md:space-y-16">
            
            {/* 1. Introducción y Aceptación */}
            <div>
                <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-500 pb-2">
                    {t("terms.acceptance.title")}
                </h2>
                <p className="text-lg leading-relaxed text-[#0a1e2e]/90">
                    {t("terms.acceptance.content")}
                </p>
                
                <h3 className="text-2xl font-semibold mt-6 mb-3 text-amber-600">
                    {t("terms.key_point.title")}
                </h3>
                <p className="text-lg leading-relaxed text-[#0a1e2e]/90">
                    {t("terms.key_point.content")}
                </p>
            </div>

            <Separator className="border-gray-300 border" /> {/* Separador visual */}

            {/* 2. Servicios y Obligaciones del Usuario */}
            <div>
                <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 pb-2">
                    {t("terms.services_obligations.title")}
                </h2>
                
                <div className="space-y-10">
                    
                    {/* 2.1 Servicios */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">
                            {t("terms.services_obligations.services.title")}
                        </h3>
                        <ul className="list-disc list-inside space-y-2 pl-4 text-lg text-[#0a1e2e]/90">
                            <li>{t("terms.services_obligations.services.p1")}</li>
                            <li>{t("terms.services_obligations.services.p2")}</li>
                            <li>{t("terms.services_obligations.services.p3")}</li>
                        </ul>
                    </div>

                    {/* 2.2 Obligaciones */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-3">
                            {t("terms.services_obligations.obligations.title")}
                        </h3>
                        <p className="mb-4 text-lg text-[#0a1e2e]/90">
                            {t("terms.services_obligations.obligations.intro")}
                        </p>
                        <ol className="list-decimal list-inside space-y-2 pl-4 text-lg text-[#0a1e2e]/90">
                            <li>{t("terms.services_obligations.obligations.o1")}</li>
                            <li>{t("terms.services_obligations.obligations.o2")}</li>
                            <li>{t("terms.services_obligations.obligations.o3")}</li>
                        </ol>
                    </div>
                </div>
            </div>

            <Separator className="border-gray-300 border" /> {/* Separador visual */}

            {/* 3. Propiedad Intelectual y Limitación de Responsabilidad */}
            <div className="space-y-10">
                
                {/* 3.1 Propiedad Intelectual */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-500 pb-2">
                        {t("terms.intellectual_property.title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-[#0a1e2e]/90">
                        {t("terms.intellectual_property.content1")}
                    </p>
                    <p className="text-lg leading-relaxed mt-4 text-[#0a1e2e]/90">
                        {t("terms.intellectual_property.content2")}
                    </p>
                </div>

                {/* 3.2 Limitación de Responsabilidad */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-500 pb-2">
                        {t("terms.liability.title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-[#0a1e2e]/90">
                        {t("terms.liability.content")}
                    </p>
                </div>

                {/* 3.3 Ley Aplicable */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 border-b-2 border-amber-500 pb-2">
                        {t("terms.law.title")}
                    </h2>
                    <p className="text-lg leading-relaxed text-[#0a1e2e]/90">
                        {t("terms.law.content")}
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
