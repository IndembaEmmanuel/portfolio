import type { MiddlewareHandler } from 'astro';
import { languages, defaultLanguage } from './i18n/i18n';

// Étendre le type Locals pour inclure la propriété lang
declare module 'astro' {
  interface Locals {
    lang: string;
  }
}

export const onRequest: MiddlewareHandler = async ({ request, locals }, next) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Détecter la langue à partir de l'URL, des cookies ou des en-têtes
  let currentLanguage = defaultLanguage;
  
  // 1. Vérifier d'abord le cookie de langue préférée
  const cookies = request.headers.get('cookie') || '';
  const langCookieMatch = cookies.match(/preferred_language=([^;]+)/i);
  
  if (langCookieMatch && Object.keys(languages).includes(langCookieMatch[1])) {
    currentLanguage = langCookieMatch[1];
  } else {
    // 2. Vérifier si l'URL contient un préfixe de langue
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (Object.keys(languages).includes(firstSegment)) {
      // Si l'URL contient un préfixe de langue valide, l'utiliser
      currentLanguage = firstSegment;
    } else {
      // 3. Sinon, détecter à partir des en-têtes
      const acceptLanguage = request.headers.get('accept-language') || '';
      
      const languageTags = acceptLanguage.split(',').map(tag => {
        const [language] = tag.trim().split(';')[0].split('-');
        return language.toLowerCase();
      });
      
      for (const lang of languageTags) {
        if (Object.keys(languages).includes(lang)) {
          currentLanguage = lang;
          break;
        }
      }
    }
  }
  
  // @ts-ignore
  locals.lang = currentLanguage;
  
  return next();
};
