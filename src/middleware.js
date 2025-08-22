export function onRequest({ request, locals }, next) {
  const url = new URL(request.url);
  
  // Si nous sommes à la racine
  if (url.pathname === '/') {
    // Obtenir la langue préférée du navigateur
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    // Détecter si le français est dans les langues préférées
    // Sinon, utiliser l'anglais comme fallback
    const preferredLanguage = acceptLanguage.includes('fr') ? 'fr' : 'en';
    
    // Rediriger vers la langue préférée
    return Response.redirect(`${url.origin}/${preferredLanguage}`, 302);
  }
  
  return next();
}
