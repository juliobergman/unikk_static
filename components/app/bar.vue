<template>
  <v-app-bar id="vAppBar" flat color="rgba(0,0,0,0)" fixed>
    <v-btn tile icon class="pa-2 my-auto" disabled>
      <ui-nav-logo :dark="$store.state.darknavlogo" />
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn
      :dark="$store.state.darknavmenu"
      class="mr-2"
      icon
      small
      @click="$bus.$emit('drawer:toggle')"
    >
      <v-icon> mdi-dots-vertical </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {},
}
</script>

<style></style>
