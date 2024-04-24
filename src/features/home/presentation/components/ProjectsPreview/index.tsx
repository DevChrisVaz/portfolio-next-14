"use client"

import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

type Props = {
    codeAvailable?: boolean;
}

const ProjectPreview: React.FC<Props> = (props) => {
    return (
        <div className="p-4">
            <div className="flex flex-col w-full h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-gray-950 dark:border-gray-700 dark:shadow-gray-700/70">
                <div className="h-[250px] flex flex-col justify-center items-center bg-primary-600 rounded-t-xl overflow-hidden">
                    <img className="w-full h-full object-cover" src="/images/projects/facturandote.png" alt="Facturandote" />
                </div>
                <div className="p-4 md:p-6">
                    <span className="block mb-1 text-xs font-semibold uppercase text-primary-600 dark:text-primary-500">
                        Landing Page
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                        Facturándote
                    </h3>
                    <p className="mt-3 text-gray-500 dark:text-gray-500">
                        Desarrollo de landing page para empresa de facturación
                    </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <Link className={`w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium ${props.codeAvailable ? "rounded-es-xl" : "rounded-b-xl"} bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800`} href="http://www.facturandote.com">
                        View live
                    </Link>
                    {
                        props.codeAvailable && (
                            <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800" href="#">
                                View Code
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const ProjectsPreview: React.FC<Props> = (_) => {
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
                <ProjectPreview />
                <ProjectPreview codeAvailable />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
                <ProjectPreview />
            </Slider>
        </div>
    );
}

export default ProjectsPreview;