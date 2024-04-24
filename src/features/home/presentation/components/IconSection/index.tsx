import React from 'react';
import { FaMobileScreen, FaPager } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { useTranslations } from 'next-intl';
import Reveal from '../../../../../common/components/Animations/Reveal';

type Props = {}

type IconElementProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const IconElement: React.FC<IconElementProps> = (props) => {
    return (
        <Reveal>
            <div>
                {props.icon}
                <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6 dark:from-neutral-700 dark:via-neutral-900">
                    <div className="bg-gray-400 w-9 h-0.5 dark:bg-neutral-600"></div>
                </div>
                <div className="mt-5">
                    <Reveal><h3 className="text-lg font-semibold text-gray-800 dark:text-white">{props.title}</h3></Reveal>
                    <Reveal><p className="mt-1 text-gray-600 dark:text-neutral-400">{props.description}</p></Reveal>
                </div>
            </div>
        </Reveal>
    )
}

const IconSection: React.FC<Props> = (_) => {

    const t = useTranslations("IconSection");

    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
                <IconElement icon={<FaMobileScreen className="text-white text-[36px]" />} title={t("mobile.title")} description={t("mobile.description")} />
                <IconElement icon={<MdWeb className="text-white text-[36px]" />} title={t("landing.title")} description={t("landing.description")} />
                <IconElement icon={<FaPager className="text-white text-[36px]" />} title={t("web.title")} description={t("web.description")} />
                <IconElement icon={<TbWorld className="text-white text-[36px]" />} title={t("api.title")} description={t("api.description")} />
            </div>
        </div>
    );
}

export default IconSection;