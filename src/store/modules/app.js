export default {
  namespaced: true,
  state: {
    drawer: {
      show: false,
      menus: {
          home: false,
          solution: false,
          clouds: false,
          customers: false,
          prcenter: false,
          cs: false,
          company: false,
      }
    },
  },
  actions: {
  },
  mutations: {
    closeDrawer (state) {
        state.drawer.show = false
    },
    openDrawer (state) {
      state.drawer.show = true
    },
    closeMenu (state, payload) {
        if (payload === 'home') {
            state.drawer.menus.home = false
        } else if (payload === 'solution') {
            state.drawer.menus.solution = false
        } else if (payload === 'clouds') {
            state.drawer.menus.clouds = false
        } else if (payload === 'customers') {
            state.drawer.menus.customers = false
        } else if (payload === 'prcenter') {
            state.drawer.menus.prcenter = false
        } else if (payload === 'cs') {
            state.drawer.menus.cs = false
        } else if (payload === 'company') {
            state.drawer.menus.company = false
        }
    },
    openMenu (state, payload) {
        state.drawer.menus = {
            home: false,
            solution: false,
            clouds: false,
            customers: false,
            prcenter: false,
            cs: false,
            company: false,
        }
        if (payload === 'home') {
            state.drawer.menus.home = true
        } else if (payload === 'solution') {
            state.drawer.menus.solution = true
        } else if (payload === 'clouds') {
            state.drawer.menus.clouds = true
        } else if (payload === 'customers') {
            state.drawer.menus.customers = true
        } else if (payload === 'prcenter') {
            state.drawer.menus.prcenter = true
        } else if (payload === 'cs') {
            state.drawer.menus.cs = true
        } else if (payload === 'company') {
            state.drawer.menus.company = true
        }
    }
  },
}
