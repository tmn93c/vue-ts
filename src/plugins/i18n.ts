import createI18n from 'vue-i18n'
import store from '../store'
const zhHans = require("./../locale/zh-Hans.json")
const en  =  require("./../locale/en.json")
const translation = {
  zh: zhHans,
  en: en,
}
const i18n = new createI18n({
  locale: store.getters.getLocale, // set locale
  messages: translation, // set locale messages
})

store.commit('SET_TRANSLATION', translation)

export default i18n
