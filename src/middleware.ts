import type { MiddlewareHandler } from 'astro';
import { languages, defaultLanguage } from './i18n/i18n';

export const onRequest: MiddlewareHandler = async ({ request, locals }, next) => {
  const url = new URL(request.url);
  
  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    let preferredLanguage = defaultLanguage;
    
    const languageTags = acceptLanguage.split(',').map(tag => {
      const [language] = tag.trim().split(';')[0].split('-');
      return language.toLowerCase();
    });
    
    for (const lang of languageTags) {
      if (Object.keys(languages).includes(lang)) {
        preferredLanguage = lang;
        break;
      }
    }
    
    // Rediriger vers la langue préférée
    return Response.redirect(`${url.origin}/${preferredLanguage}`, 302);
  }
  
  return next();
};
