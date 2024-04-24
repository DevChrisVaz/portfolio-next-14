import { i18n } from "./features/i18n/infrastructure/middlewares/i18n";
import { stackMiddlewares } from "./config/middlewares/stackHandler";
import { MiddlewareFactory } from "./config/middlewares/types";
// import 

const middlewares: MiddlewareFactory[] = [
    i18n
];

export default stackMiddlewares(middlewares);

export const config = {
    // Match only internationalized pathnames
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
    ],
  };