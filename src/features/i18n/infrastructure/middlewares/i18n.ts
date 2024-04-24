import createMiddleware from 'next-intl/middleware';
import { MiddlewareFactory } from '../../../../config/middlewares/types';
import { NextFetchEvent, NextRequest } from 'next/server';
import { localesArray } from '@/features/i18n/domain/constants/locales';

const middleware = createMiddleware({
  // A list of all locales that are supported
  locales: localesArray,

  // Used when no locale matches
  defaultLocale: localesArray[0]
});

export const i18n: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    if (["/", ...localesArray.map((l) => "/" + l)].some((path) => pathname.startsWith(path))) {
      return middleware(request);   
    }

    return next(request, _next);
  }
}