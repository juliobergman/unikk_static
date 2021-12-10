<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    app
    dark
    temporary
    color="rgba(0,0,0,0.7)"
  >
    <v-list-item class="pa-10">
      <ui-logo :fill="'white'" />
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav class="mt-1">
      <v-menu offset-y dark>
        <template #activator="{ on, attrs }">
          <v-list-item link v-bind="attrs" v-on="on">
            <v-list-item-icon>
              <v-icon>mdi-translate</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ $t('drawer.language') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list>
          <v-list-item
            v-for="language in languages"
            :key="language.name"
            @click="setLanguage(language.value)"
          >
            <v-list-item-title>{{ language.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="goto(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ $t('drawer.' + item.to) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    selected: 0,
    languages: [
      { name: 'English', value: 'en' },
      { name: 'Deutsch', value: 'de' },
      { name: 'Español', value: 'es' },
    ],
    items: [
      {
        icon: 'mdi-home',
        to: 'index',
      },
      {
        icon: 'mdi-domain',
        to: 'about',
      },
      {
        icon: 'mdi-finance',
        to: 'investment',
      },
      {
        icon: 'mdi-earth',
        to: 'geofocus',
      },
      {
        icon: 'mdi-at',
        to: 'contact',
      },
    ],
  }),
  mounted() {
    this.$bus.$on('drawer:toggle', () => {
      this.drawer = !this.drawer
    })
  },
  methods: {
    goto(item) {
      if (item.to === this.$router.currentRoute.name) {
        this.drawer = false
        return
      }
      this.$router.push({ name: item.to })
    },
    setLanguage(lang) {
      // mutate 'locale' in store
      this.$store.commit('SET_LANG', lang)
      // re-route to the current page but with the selected language in a query string
      this.$router.push({
        path: `${this.$router.currentRoute.path}?lang=${lang}`,
      })
    },
  },
}
</script>

<style></style>
