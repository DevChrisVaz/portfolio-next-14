import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { localesArray } from "../../domain/constants/locales";

export default getRequestConfig(async ({ locale }) => {
    if (!localesArray.includes(locale)) notFound();

    return {
        messages: (await import(`../../domain/messages/${locale}.json`)).default
    }
})