import translations from "../translations";

export const getTranslation = () => {

  const lang =
    localStorage.getItem("language") || "en";

  return translations[lang];
};