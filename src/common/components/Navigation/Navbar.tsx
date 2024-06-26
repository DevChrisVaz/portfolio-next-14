"use client"

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LinkButton from '../Buttons/LinkButton';
import { ButtonSize } from '../Buttons/enums';
import { usePathname } from 'next/navigation';
import LocaleSelect from '@/features/i18n/presentation/components/LocaleSelect';

type Props = {}

const NavLink: React.FC<NavLinkProps> = (props) => {
    const [isActive, setIsActive] = useState(false);

    const pathname = usePathname();

    const checkIfActive = (): void => {
        if (pathname.split("/")[2] === (props.to.split("/")[1] === "" ? undefined : props.to.split("/")[1])) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    };

    useEffect(() => {
        checkIfActive();
    }, [pathname]);


    return (
        <Link href={props.to} className={`relative inline-block text-black before:absolute before:-bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 ${isActive ? "before:bg-primary" : ""} dark:text-white`}>{props.children}</Link>
    );
}

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
    return props.item.dropdown && props.item.dropdown?.length > 0 ?
        <>
            <p className="cursor-default">{props.item.label}</p>
            <ul className="absolute left-0 hidden pt-2 space-y-2 bg-gray-950 border border-gray-700 group-hover:block">
                {
                    props.item.dropdown?.map((item, key) =>
                        <li key={key} className="relative group z-10">
                            <NavbarItem item={item} />
                        </li>
                    )
                }
            </ul>
        </>
        :
        <NavLink to={props.item.url!}>{props.item.label}</NavLink>
}

const Navbar: React.FC<Props> = (_) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const t = useTranslations("Navbar");

    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
            <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto" aria-label="Global">
                <div className="md:col-span-3">
                    <img className="h-[52px]" src="/images/logo/full-logo.svg" alt="DevChrisVaz" />
                </div>

                <div className="flex items-center gap-x-2 ms-auto py-2 md:ps-6 md:order-3 md:col-span-3">
                    <LocaleSelect />
                    <LinkButton to="/contact" size={ButtonSize.md}>{t("contact")}</LinkButton>

                    <div className="md:hidden">
                        <button type="button" onClick={() => setIsOpen(!isOpen)} className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? "block" : "hidden"} overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}>
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
                        <div>
                            <NavLink to="/">{t("home")}</NavLink>
                        </div>
                        <div>
                            <NavLink to="/career">{t("career")}</NavLink>
                        </div>
                        {/* <div>
                            <NavLink to="/services">{t("services")}</NavLink>
                        </div>
                        <div>
                            <NavLink to="/about">{t("about")}</NavLink>
                        </div>
                        <div>
                            <NavLink to="/blog">{t("blog")}</NavLink>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;