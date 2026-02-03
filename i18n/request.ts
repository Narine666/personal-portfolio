import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'am', 'ru'];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;  
  
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  try {
    return {
      locale,  
      messages: (await import(`../lib/locales/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Error loading locale ${locale}:`, error);
    notFound();
  }
});