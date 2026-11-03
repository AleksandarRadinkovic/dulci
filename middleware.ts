import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n.routing';

export default createMiddleware({
  ...routing,
  localePrefix: 'as-needed', 
});

export const config = {
  // Sve rute osim API-ja, Next internih fajlova i statičkih fajlova (slike itd.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
