"use client"

import Select from '@/common/components/Forms/select/Select';
import { locales } from '@/features/i18n/domain/constants/locales';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from 'react';

type Props = {}

const LocaleSelect: React.FC<Props> = (_) => {
    const t = useTranslations("Navbar");

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();
    const pathname = usePathname();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        const splittedPathname = pathname.split("/");
        startTransition(() => {
            router.replace(`/${nextLocale}/${splittedPathname.slice(2, splittedPathname.length).join("/")}`);
        });
    };

    return (
        <Select label={t("language")} defaultValue={localActive} onChange={onSelectChange} options={locales.map(l => ({ name: l.lable, value: l.key }))} />
    );
}

export default LocaleSelect;