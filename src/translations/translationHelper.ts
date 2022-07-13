import { useTranslation } from "react-i18next";

const { t, i18n } = useTranslation();

// input needs to be a key in the language json files under translations/languages
export const TextValue = (input: string) => {
  return t(input);
};

// language needs to be a language code such as 'en-US'
export const Translate = (language: string) => {
  i18n.changeLanguage(language);
};
