import Reveal from '@/common/components/Animations/Reveal';
import H2 from '@/common/components/Heading/H2';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {}

const Education: React.FC<Props> = (_) => {

    const t = useTranslations("Career")

    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                <H2>{t("Education.Heading")}</H2>
            </div>

            <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
                <Reveal>
                    <div className="py-8 first:pt-0 last:pb-0">
                        <div className="flex gap-x-5">
                            <div>
                                <h3 className="block md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    {t("Education.University.name")}
                                </h3>
                                <span className="block font-light text-sm text-gray-800 dark:text-neutral-200">
                                    {t("Education.University.degree")}
                                </span>
                                <span className="block mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Mérida, Yucatán - May, 2024
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="py-8 first:pt-0 last:pb-0">
                        <div className="flex gap-x-5">
                            <div>
                                <h3 className="block md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    {t("Education.Highschool.degree")}
                                </h3>
                                <span className="block font-light text-sm text-gray-800 dark:text-neutral-200">
                                    {t("Education.Highschool.degree")}
                                </span>
                                <span className="block mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                    Mérida, Yucatán - July, 2019
                                </span>
                            </div>
                        </div>
                    </div>
                </Reveal>

            </div>
        </div >
    );
}

export default Education;