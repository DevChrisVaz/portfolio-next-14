import Reveal from '@/common/components/Animations/Reveal';
import H2 from '@/common/components/Heading/H2';
import { useTranslations } from 'next-intl';
import React from 'react';

type Props = {}

const LeadershipsAndActivities: React.FC<Props> = (_) => {

    const t = useTranslations("Career");

    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
                <Reveal><H2>{t("LeadershipsAndActivities.Heading")}</H2></Reveal>
            </div>

            <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
                <div className="py-8 first:pt-0 last:pb-0">
                    <div className="flex gap-x-5">
                        <ul className="mt-1 list-disc list-inside text-gray-500 dark:text-neutral-500">
                            <Reveal><li>{t("LeadershipsAndActivities.activities.activity1")}</li></Reveal>
                            <Reveal>
                                <li>{t("LeadershipsAndActivities.activities.activity2.description")}
                                    <ul className="mt-1 ms-5 list-disc list-inside text-gray-500 dark:text-neutral-500">
                                        <li>{t("LeadershipsAndActivities.activities.activity2.subActivities.subActivity1")}</li>
                                        <li>{t("LeadershipsAndActivities.activities.activity2.subActivities.subActivity2")}</li>
                                    </ul>
                                </li>
                            </Reveal>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeadershipsAndActivities;