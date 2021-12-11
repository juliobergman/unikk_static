// middleware/i18n.js
export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  const defaultLocale = app.i18n.fallbackLocale
  const localeCookie = app.$cookies.get('locale')
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  const locale = localeCookie || defaultLocale
  if (store.state.locales.includes(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Mutate the store's locale once we understand which locale is being requested prior to each page render
  store.commit('SET_LANG', locale)
  // Set locale from the query string '?lang='**''
  app.i18n.locale = store.state.locale
  app.$cookies.set('locale', locale, {
    path: '/',
  })
}
