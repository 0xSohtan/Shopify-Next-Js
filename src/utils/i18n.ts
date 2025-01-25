import videoBlockDe from "@/locales/de/videoBlock.json";
import videoBlockEn from "@/locales/en/videoBlock.json"

const languages = {
  de: {
    videoBlock: videoBlockDe,
  },
  en: {
    videoBlock: videoBlockEn,
  },
};

export const getTranslations = (lang: string, block: string) => {
  const translations = languages[lang] || languages["de"]; // Fallback auf Deutsch
  return translations[block] || {};
};
