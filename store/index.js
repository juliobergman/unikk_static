// store/index.js
export const state = () => ({
  locales: ['en', 'de', 'es'],
  locale: 'en',
  device: {},
  darknav: true,
  darknavmenu: true,
  darknavlogo: true,
  currentdepth: 0,
  transition: 'slide-down',
  navprev: 'index',
  navnext: 'about',
})

export const getters = {}

export const mutations = {
  SET_LANG(state, locale) {
    // eslint-disable-next-line unicorn/prefer-includes
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setDevice(state, value) {
    state.device = value
  },
  setDarkNav(state, status) {
    state.darknav = status
  },
  setDarkNavMenu(state, status) {
    state.darknavmenu = status
  },
  setDarkNavLogo(state, status) {
    state.darknavlogo = status
  },
  navigation(state, route) {
    state.navnext = false
    state.navprev = false

    const RouteDepth = [
      'index',
      'about',
      'investment',
      'geofocus',
      'geofocus2',
      'contact',
    ]

    const PreviousDepth = state.currentdepth
    state.currentdepth = route.meta[0].depth

    if (PreviousDepth < state.currentdepth) {
      state.transition = 'slide-up'
    }
    if (PreviousDepth > state.currentdepth) {
      state.transition = 'slide-down'
    }

    const PrevStep = state.currentdepth - 1

    const RouteCount = RouteDepth.length

    const NextStep = state.currentdepth + 1
    if (NextStep < RouteCount) {
      state.navnext = RouteDepth[state.currentdepth + 1]
    }

    if (PrevStep >= 0) {
      state.navprev = RouteDepth[state.currentdepth - 1]
    }
  },
}

export const actions = {}
