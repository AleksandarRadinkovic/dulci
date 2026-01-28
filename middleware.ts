import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n.routing';

export default createMiddleware({
  ...routing,
  localePrefix: 'as-needed', 
});

export const config = {
  matcher: ['/', '/(sr|en)/:path*']
};
