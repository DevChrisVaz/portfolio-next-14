import React from 'react';
import { FaMobileScreen, FaPager } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { useTranslations } from 'next-intl';

type Props = {}

const IconSection: React.FC<Props> = (_) => {

    const t = useTranslations("IconSection");

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">

                <div>
                    <FaMobileScreen className="text-white text-[36px]" />
                    <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                        <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t("mobile.title")}</h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">{t("mobile.description")}</p>
                    </div>
                </div>

                <div>
                    <MdWeb className="text-white text-[36px]" />
                    <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                        <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t("landing.title")}</h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">{t("landing.description")}</p>
                    </div>
                </div>

                <div>
                    <FaPager className="text-white text-[36px]" />
                    <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                        <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t("web.title")}</h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">{t("web.description")}</p>
                    </div>
                </div>

                <div>
                    <TbWorld className="text-white text-[36px]" />
                    <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                        <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                    </div>
                    <div className="mt-5">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{t("api.title")}</h3>
                        <p className="mt-1 text-gray-600 dark:text-neutral-400">{t("api.description")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IconSection;