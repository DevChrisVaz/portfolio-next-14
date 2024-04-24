import Reveal from '@/common/components/Animations/Reveal';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

type Props = {}

const Contact: React.FC<Props> = (_) => {

    const t = useTranslations("Contact");

    return (
        <div className="max-w-7xl px-4 lg:px-6 py-12 lg:py-24 mx-auto">
            <div className="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
                <h2 className="font-medium text-black text-2xl sm:text-4xl dark:text-white">
                    {t("Heading")}
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
                <Reveal>
                    <div className="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                    </div>
                </Reveal>


                <div className="space-y-8 lg:space-y-16">
                    <Reveal>
                        <div>
                            <h3 className="mb-5 font-semibold text-black dark:text-white">
                                {t("location")}
                            </h3>


                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                                <div className="flex gap-4">
                                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>

                                    <div className="grow">
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            México
                                        </p>
                                        <address className="mt-1 text-black not-italic dark:text-white">
                                            {/* 300 Bath Street, Tay House<br /> */}
                                            Mérida, Yucatán
                                        </address>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h3 className="mb-5 font-semibold text-black dark:text-white">
                                {t("contact.heading")}
                            </h3>


                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                                <div className="flex gap-4">
                                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>

                                    <div className="grow">
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            {t("contact.email")}
                                        </p>
                                        <p>
                                            <Link className="relative inline-block font-medium text-black before:absolute before:-bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="mailto:dev.chrisvaz@gmail.com">
                                                dev.chrisvaz@gmail.com
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <svg className="flex-shrink-0 size-5 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>

                                    <div className="grow">
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            {t("contact.phone")}
                                        </p>
                                        <p>
                                            <Link className="relative inline-block font-medium text-black before:absolute before:-bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary-400 hover:before:bg-black focus:outline-none focus:before:bg-black dark:text-white dark:hover:before:bg-white dark:focus:before:bg-white" href="tel:+529997466773">
                                                +52 (999) 746-6773
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    <Reveal>
                        <div>
                            <h3 className="mb-5 font-semibold text-black dark:text-white">
                                {t("socialMedia")}
                            </h3>


                            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                                <div className="flex gap-4">
                                    <a href="https://github.com/DevChrisVaz" target='blank'><FaGithub className="text-gray-500 hover:text-white text-[20px]" /></a>
                                    <a href="https://linkedin.com/in/christian-vázquez-0a4820253" target='blank'><FaLinkedin className="text-gray-500 hover:text-white text-[20px]" /></a>
                                    <a href="https://wa.me/529997466773" target='blank'><FaWhatsapp className="text-gray-500 hover:text-white text-[20px]" /></a>
                                </div>
                            </div>

                        </div>
                    </Reveal>
                </div>

            </div>
        </div>
    );
}

export default Contact;