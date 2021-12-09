// store/index.js
export const state = () => ({
  locales: ['en', 'de', 'es'],
  locale: 'en',
})

export const mutations = {
  SET_LANG(state, locale) {
    // eslint-disable-next-line unicorn/prefer-includes
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
}
