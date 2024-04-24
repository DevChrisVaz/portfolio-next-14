"use client"

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

type Props = {

}

type ProjectPreview = {
    code?: string;
    live?: string;
    type: string;
    name: string;
    description: string;
    image: string;
}

const ProjectPreview: React.FC<ProjectPreview> = (props) => {

    const t = useTranslations("Projects");

    return (
        <div className="p-4">
            <div className="flex flex-col w-full h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-gray-950 dark:border-gray-700 dark:shadow-gray-700/70">
                <div className="h-[250px] flex flex-col justify-center items-center bg-primary-600 rounded-t-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src={props.image} alt="Facturandote" />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-primary-600 dark:text-primary-500">
                        {props.type}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        {props.name}
                    </h3>
                    <p className="mt-3 line-clamp-1 text-gray-500 dark:text-gray-500">
                        {props.description}
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    {
                        props.live ?
                            <a className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium ${props.code ? "rounded-es-xl" : "rounded-b-xl"} bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800`} href={props.live} target="blank">
                                {t("Card.live")}
                            </a>
                            :
                            <Link className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium ${props.code ? "rounded-es-xl" : "rounded-b-xl"} bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800`} href="#">
                                {t("Card.details")}
                            </Link>
                    }
                    {
                        props.code && (
                            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href={props.code} target="blank">
                                {t("Card.code")}
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const ProjectsPreview: React.FC<Props> = (_) => {

    const t = useTranslations("Projects");

    return (
        <div className="max-w-[85rem] mx-auto py-10 sm:px-6 lg:px-4 lg:py-14">
            <Slider
                autoplay
                autoplaySpeed={5000}
                pauseOnHover={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                arrows={false}
                responsive={[
                    {
                        breakpoint: 1080,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 560,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]}
            >
                <ProjectPreview image="/images/projects/facturandote.png" live="http://www.facturandote.com" type={t("Facturandote.type")} name={t("Facturandote.name")} description={t("Facturandote.shortDescription")} />
                <ProjectPreview image="/images/projects/gymbro-landing.png" live="https://gymbro-landing-page.vercel.app" type={t("GymbroLanding.type")} name={t("GymbroLanding.name")} description={t("GymbroLanding.shortDescription")} />
                <ProjectPreview image="/images/projects/gymbro-dashboard.png" type={t("GymbroAdmin.type")} name={t("GymbroAdmin.name")} description={t("GymbroAdmin.shortDescription")} />
                <ProjectPreview image="/images/projects/gymbro-landing.png" type={t("GymbroApp.type")} name={t("GymbroApp.name")} description={t("GymbroApp.shortDescription")} />
                <ProjectPreview image="/images/projects/gymbro-landing.png" type={t("GymbroApi.type")} name={t("GymbroApi.name")} description={t("GymbroApi.shortDescription")} />
                <ProjectPreview image="/images/projects/gymbro-landing.png" type={t("PreNota.type")} name={t("PreNota.name")} description={t("PreNota.shortDescription")} />
                <ProjectPreview image="/images/projects/trompos.png" type={t("Trompos.type")} name={t("Trompos.name")} description={t("Trompos.shortDescription")} live="https://trompos-next-14.vercel.app/" />
                <ProjectPreview image="/images/projects/deleite-front.png" type={t("DeleiteFront.type")} name={t("DeleiteFront.name")} description={t("DeleiteFront.shortDescription")} live="https://deleitedlillian.vercel.app/" />
                <ProjectPreview image="/images/projects/deleite-admin.png" type={t("DeleiteAdmin.type")} name={t("DeleiteAdmin.name")} description={t("DeleiteAdmin.shortDescription")} />
                <ProjectPreview image="/images/projects/deleite-admin.png" type={t("DeleiteApi.type")} name={t("DeleiteApi.name")} description={t("DeleiteApi.shortDescription")} />
                <ProjectPreview image="/images/projects/colegio-merida.png" live="https://www.colegiomerida.edu.mx/" type={t("ColegioMerida.type")} name={t("ColegioMerida.name")} description={t("ColegioMerida.shortDescription")} />
            </Slider>
        </div>
    );
}

export default ProjectsPreview;