import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from '18next-browser-languagedetector'
import resource from '../assets/lang/resource'

i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'id',
        debug: true,
        resource: resource,
        interpolation: {
            escapeValue: false
        }
    })

export default i18next