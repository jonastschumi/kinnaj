import React from "react";
import Link from "next/link";
import RevealOnScroll from "./revealOnScroll";
import {useTranslations} from "next-intl";

export default function Fpv() {
    const t = useTranslations("Home");
    return (
        <div className="relative flex flex-wrap">
            <div className="w-full sm:w-1/2">
                <div className="bg-primary-400 p-6">
                    <h2 className="text-2xl font-semibold mb-4">{t("fpvTitel")}</h2>
                    <p>{t("whatIsFpv")}</p>
                    <p className="mt-4">{t("offersFPV")}</p>
                    <div className="flex items-center justify-center pt-5">
                        <Link
                            href="/drone"
                            className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full"
                        >
                            {t("buttonEquipment")}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 bg-primary-50 flex items-center justify-center">
                <div className="text-white p-6">
                    <div className="flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <img
                                src="/certs/MicrosoftCertifiedAssociate.png"
                                alt="Bild 1"
                                className="h-40 object-contain rounded-md"
                            />
                        </div>
                        <div className="flex">
                            <div className="mr-8">
                                <img
                                    src="/certs/MicrosoftCertifiedAssociate.png"
                                    alt="Bild 2"
                                    className="h-40 object-contain rounded-md"
                                />
                            </div>
                            <div>
                                <img
                                    src="/certs/MicrosoftCertifiedAssociate.png"
                                    alt="Bild 3"
                                    className="h-40 object-contain rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
