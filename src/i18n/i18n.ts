
export const languages = {
    fr: "Français",
    en: "English",
  };
  
  export const defaultLanguage = "fr";
  
  export type Translation = {
    [key: string]: string | Translation;
  };
  
  export const detectBrowserLanguage = (): string => {
    if (typeof window !== "undefined" && navigator.language) {
      const browserLang = navigator.language.split("-")[0];
      return Object.keys(languages).includes(browserLang)
        ? browserLang
        : defaultLanguage;
    }
    return defaultLanguage;
  };
  
  export const loadTranslations = async (
    lang: string
  ): Promise<Translation> => {
    try {
      const translations = await import(`./translations/${lang}.ts`);
      return translations.default;
    } catch (error) {
      console.error(
        `Erreur lors du chargement des traductions pour ${lang}:`,
        error
      );
      if (lang !== defaultLanguage) {
        return loadTranslations(defaultLanguage);
      }
      return {};
    }
  };
  
  // Fonction utilitaire pour trouver une clé imbriquée
  const getNestedTranslation = (
    translations: Translation,
    key: string
  ): string | null => {
    const keys = key.split(".");
    let result: unknown = translations;
  
    for (const k of keys) {
      if (typeof result === "object" && result !== null && k in result) {
        result = (result as Translation)[k];
      } else {
        return null;
      }
    }
  
    return typeof result === "string" ? result : null;
  };
  
  export const translate = (
    translations: Translation,
    key: string,
    params?: Record<string, string>
  ): string => {
    const baseText = getNestedTranslation(translations, key);
  
    if (!baseText) {
      return key;
    }
  
    if (!params) {
      return baseText;
    }
  
    let finalText = baseText;
    for (const [param, value] of Object.entries(params)) {
      finalText = finalText.replace(new RegExp(`{${param}}`, "g"), value);
    }
  
    return finalText;
  };
  
  // URL localisée
  export const getLocalizedUrl = (pathname: string, lang: string): string => {
    if (pathname === "/" || pathname === "") {
      return lang === defaultLanguage ? "/" : `/${lang}`;
    }
  
    const pathParts = pathname.split("/").filter(Boolean);
    if (Object.keys(languages).includes(pathParts[0])) {
      pathParts.shift();
      return lang === defaultLanguage
        ? `/${pathParts.join("/")}`
        : `/${lang}/${pathParts.join("/")}`;
    }
  
    return lang === defaultLanguage
      ? `/${pathParts.join("/")}`
      : `/${lang}/${pathParts.join("/")}`;
  };  