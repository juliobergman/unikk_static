<template>
  <v-row
    class="fill-height ma-0 pa-0 bck"
    align="center"
    justify="space-around"
  >
    <v-spacer class="d-none d-md-flex"></v-spacer>

    <v-card
      color="transparent"
      flat
      max-width="375px"
      min-width="200px"
      width="50vw"
    >
      <ui-anim-logo></ui-anim-logo>

      <v-card-text
        class="welcome-card-text title white--text text-center mt-3 pa-0"
        style="opacity: 0.8"
      >
        {{ $t('index.slogan') }}
      </v-card-text>
    </v-card>

    <v-spacer class="d-none d-md-flex"></v-spacer>

    <v-card
      flat
      color="red"
      class="d-none d-md-flex w-50 pa-0 ma-0 align-self-end"
      rounded="0"
      max-height="90vh"
      elevation="0"
    >
    </v-card>
  </v-row>
</template>

<script>
export default {
  meta: {
    depth: 0,
  },
  data: () => ({
    iconColor: 'white',
  }),
  head: () => ({
    title: 'Home',
    // meta: [
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content: 'My custom description',
    //   },
    // ],
  }),
  methods: {},
}
</script>

<style scoped>
.bck {
  background-color: #121212;
  /* background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  ); */
}
</style>
