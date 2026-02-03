import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'am', 'ru'],
 
  defaultLocale: 'en'
});
 
export const config = {
  matcher: [
    '/', 
    '/(am|ru|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};