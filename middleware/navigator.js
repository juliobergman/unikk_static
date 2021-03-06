export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  let colorNavs = store.state.darknav
  let colorMenu = store.state.darknavmenu
  let colorLogo = store.state.darknavlogo

  const navigatorDark = {
    index: true,
    about: false,
    investment: false,
    geofocus: true,
    geofocus2: true,
    contact: false,
  }

  const navigatorDarkMenu = {
    index: true,
    about: true,
    investment: false,
    geofocus: true,
    geofocus2: true,
    contact: false,
  }

  const navigatorDarkLogo = {
    index: true,
    about: false,
    investment: true,
    geofocus: true,
    geofocus2: true,
    contact: false,
  }

  colorNavs = navigatorDark[route.name]
  colorMenu = navigatorDarkMenu[route.name]
  colorLogo = navigatorDarkLogo[route.name]

  store.commit('setDarkNav', colorNavs)
  store.commit('setDarkNavMenu', colorMenu)
  store.commit('setDarkNavLogo', colorLogo)
  store.commit('navigation', route)
}
