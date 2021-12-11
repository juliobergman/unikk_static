<template>
  <v-img
    height="100vh"
    min-width="100vw"
    position="30% center"
    :aspect-ratio="4 / 3"
    :src="require('@/assets/web/map-comp.jpg')"
  >
    <v-container fluid fill-height class="d-flex pa-0">
      <div class="white--text mt-auto mb-12 mb-md-16">
        <div
          class="text-center text-md-left pl-md-10 text-h4 text-md-h2 white--text font-weight-medium mb-4"
        >
          {{ $t('geofocus.title') }}
        </div>
        <div
          class="pa-4 px-md-10 text-body-1 text-md-h5 white--text"
          style="background: rgba(0, 0, 0, 0.6)"
        >
          {{ $t('geofocus.1') }}
        </div>
      </div>
    </v-container>
  </v-img>
</template>

<script>
export default {
  meta: {
    depth: 3,
  },
  head: () => ({
    title: 'Geographical Focus',
    // meta: [
    //   {
    //     hid: 'description',
    //     name: 'description',
    //     content: 'My custom description',
    //   },
    // ],
  }),
}
</script>

<style scoped>
.v-image {
  background-color: #000;
}
</style>
