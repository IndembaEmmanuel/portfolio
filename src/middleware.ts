import type { MiddlewareHandler } from 'astro';
import { languages } from './i18n/i18n';

export const onRequest: MiddlewareHandler = ({ request, locals }, next) => {
  const url = new URL(request.url);
  
  // Si nous sommes à la racine
  if (url.pathname === '/') {
    // Obtenir la langue préférée du navigateur
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Analyser les langues préférées du navigateur
    let preferredLanguage = 'fr'; // Langue par défaut
    
    // Vérifier si une des langues supportées est dans les préférences du navigateur
    const supportedLanguages = Object.keys(languages);
    const browserLanguages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().substring(0, 2));
    
    for (const lang of browserLanguages) {
      if (supportedLanguages.includes(lang)) {
        preferredLanguage = lang;
        break;
      }
    }
    
    // Rediriger vers la langue préférée
    return Response.redirect(`${url.origin}/${preferredLanguage}`, 302);
  }
  
  return next();
};
