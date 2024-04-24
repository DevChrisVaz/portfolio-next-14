import H2 from '@/common/components/Heading/H2';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {}

const WorkExperience: React.FC<Props> = (_) => {

    const t = useTranslations("Career");

    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                <H2>{t("WorkExperience.Heading")}</H2>
            </div>

            <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
                <div className="py-8 first:pt-0 last:pb-0">
                    <div className="flex gap-x-5">
                        <div>
                            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                {t("WorkExperience.Work1.job")}
                            </h3>
                            <span className="font-light text-sm text-gray-800 dark:text-neutral-200">
                                {t("WorkExperience.Work1.enterprise")}
                            </span>
                            <ul className="mt-1 list-disc list-inside text-gray-500 dark:text-neutral-500">
                                <li>{t("WorkExperience.Work1.activities.activity1")}</li>
                                <li>{t("WorkExperience.Work1.activities.activity2")}</li>
                                <li>{t("WorkExperience.Work1.activities.activity3")}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="py-8 first:pt-0 last:pb-0">
                    <div className="flex gap-x-5">
                        <div>
                            <h3 className="md:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                {t("WorkExperience.Work2.job")}
                            </h3>
                            <span className="font-light text-sm text-gray-800 dark:text-neutral-200">
                                {t("WorkExperience.Work2.enterprise")}
                            </span>
                            <ul className="mt-1 list-disc list-inside text-gray-500 dark:text-neutral-500">
                                <li>{t("WorkExperience.Work2.activities.activity1")}</li>
                                <li>{t("WorkExperience.Work2.activities.activity2")}</li>
                                <li>{t("WorkExperience.Work2.activities.activity3")}</li>
                                <li>{t("WorkExperience.Work2.activities.activity4")}</li>
                                <li>{t("WorkExperience.Work2.activities.activity5")}</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WorkExperience;