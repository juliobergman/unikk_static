<template>
  <v-app dark>
    <v-main>
      <app-bar />
      <app-drawer />
      <app-navigator />
      <v-container fluid fill-height class="ma-0 pa-0">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
