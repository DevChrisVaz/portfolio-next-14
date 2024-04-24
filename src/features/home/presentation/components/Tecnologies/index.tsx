"use client"

import React from 'react';
import { FaReact } from "react-icons/fa";
import { FaBootstrap, FaCss3, FaDocker, FaHtml5, FaLinux, FaNodeJs } from 'react-icons/fa6';
import { SiDotnet, SiFlutter, SiGraphql, SiJavascript, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiRedis, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Slider from 'react-slick';

type Props = {}

type TecnologyCardProps = {
    icon: React.ReactNode;
    name: string;
}

const TecnologyCard: React.FC<TecnologyCardProps> = (props) => {
    return (
        <div className="m-3 group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-gray-900 dark:border-gray-800">
            <div className="p-4 md:p-5">
                <div className="flex items-center">
                    {props.icon}
                    <div className="grow ms-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                            {props.name}
                        </h3>
                        {/* <p className="text-sm text-gray-500 dark:text-gray-500">
                            Get help from 40k+ Preline users
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Tecnologies: React.FC<Props> = (_) => {
    return (

        <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <Slider
                autoplay
                pauseOnHover={false}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={3}
                arrows={false}
                rows={2}
                responsive={[
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: false
                        }
                    },
                    {
                        breakpoint: 460,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false
                        }
                    }
                ]}
            >
                <TecnologyCard icon={<FaReact className="text-white text-[32px]" />} name="ReactJS" />
                <TecnologyCard icon={<SiNextdotjs className="text-white text-[32px]" />} name="NextJS" />
                <TecnologyCard icon={<FaNodeJs className="text-white text-[32px]" />} name="NodeJS" />
                <TecnologyCard icon={<SiNestjs className="text-white text-[32px]" />} name="NestJS" />
                <TecnologyCard icon={<SiMongodb className="text-white text-[32px]" />} name="MongoDB" />
                <TecnologyCard icon={<FaDocker className="text-white text-[32px]" />} name="Docker" />
                <TecnologyCard icon={<SiTailwindcss className="text-white text-[32px]" />} name="TailwindCSS" />
                <TecnologyCard icon={<FaBootstrap className="text-white text-[32px]" />} name="Bootstrap" />
                <TecnologyCard icon={<SiDotnet className="text-white text-[32px]" />} name="DotNet" />
                <TecnologyCard icon={<SiMysql className="text-white text-[32px]" />} name="MySQL" />
                <TecnologyCard icon={<SiMicrosoftsqlserver className="text-white text-[32px]" />} name="SQL Server" />
                <TecnologyCard icon={<SiPostgresql className="text-white text-[32px]" />} name="PostgreSQL" />
                <TecnologyCard icon={<SiFlutter className="text-white text-[32px]" />} name="Flutter" />
                <TecnologyCard icon={<FaHtml5 className="text-white text-[32px]" />} name="HTML 5" />
                <TecnologyCard icon={<FaCss3 className="text-white text-[32px]" />} name="CSS 3" />
                <TecnologyCard icon={<SiJavascript className="text-white text-[32px]" />} name="Javascript" />
                <TecnologyCard icon={<SiTypescript className="text-white text-[32px]" />} name="Typescript" />
                <TecnologyCard icon={<SiGraphql className="text-white text-[32px]" />} name="GraphQL" />
                <TecnologyCard icon={<SiRedis className="text-white text-[32px]" />} name="Redis" />
                <TecnologyCard icon={<FaLinux className="text-white text-[32px]" />} name="Linux" />
            </Slider>
        </div>
    );
}

export default Tecnologies;