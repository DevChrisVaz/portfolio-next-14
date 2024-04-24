import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

type Props = {}

const Footer: React.FC<Props> = (_) => {
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                <div>
                    <Link className="flex-none text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand"><img className="h-[52px]" src="/images/logo/full-logo.svg" alt="DevChrisVaz" /></Link>
                </div>

                <ul className="text-center">
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
                        <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="mailto:dev.chrisvaz@gmail.com">
                            dev.chrisvaz@gmail.com
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
                        <a className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="tel:9997466773">
                            +52 (999) 746 - 6773
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
                        <span className="inline-flex gap-x-2 text-sm text-gray-500 dark:text-neutral-500">
                            Mérida, Yucatán, México.
                        </span>
                    </li>
                </ul>

                <div className="flex md:justify-end gap-4 space-x-2">
                    <a href="https://github.com/DevChrisVaz" target='blank'><FaGithub className="text-gray-500 hover:text-white text-[20px]" /></a>
                    <a href="https://linkedin.com/in/christian-vázquez-0a4820253" target='blank'><FaLinkedin className="text-gray-500 hover:text-white text-[20px]" /></a>
                    <a href="https://wa.me/529997466773" target='blank'><FaWhatsapp className="text-gray-500 hover:text-white text-[20px]" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;