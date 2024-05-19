//i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import laungageDetector from "i18next-browser-languagedetector";

//JSON Бекенд
import ruTranslation from '../public/locales/ru.json';
import enTranslation from '../public/locales/en.json';


i18n
    .use(Backend)
    //Определение языка
    .use(laungageDetector)
    //Connect
    .use(initReactI18next)

    .init({
        fallbackLng: 'en',
        lng: 'en', //Первоначальный язык
        debug: true,
        resources: {
            ru: { translation: ruTranslation }, //вызов с переменной на JSON backend русский
            en: { translation: enTranslation },//вызов с переменной на JSON backend анг.язык
        }

    })
export default i18n;
