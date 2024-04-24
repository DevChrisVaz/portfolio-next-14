import WebProject from '@/features/home/presentation/pages/Projects/WebProject';
import { useTranslations } from 'next-intl';
import React from 'react';

const Facturandote = () => {

    const t = useTranslations("Projects.Facturandote");

    return (
        <WebProject 
            name={t("name")}
            shortDescription={t("shortDescription")}
        />
    );
}

export default Facturandote;