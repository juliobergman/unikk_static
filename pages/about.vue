<template>
  <v-row no-gutters class="fill-height">
    <v-col
      order="1"
      order-md="0"
      cols="12"
      md="8"
      class="px-6 pt-6 pb-12 px-md-16 pt-md-16"
    >
      <div class="text-h4 text-md-h2 primary--text mt-5 mb-9 my-md-16">
        {{ $t('about.title') }}
      </div>
      <div class="text-body-1 text-md-h5 mb-7 mb-md-14">
        {{ $t('about.1') }}
      </div>
      <div class="text-body-1 text-md-h5 mb-7 mb-md-14">
        {{ $t('about.2') }}
      </div>
      <div class="text-body-1 text-md-h5">
        {{ $t('about.3') }}
      </div>
    </v-col>
    <v-col order="0" order-md="1" cols="12" md="4">
      <v-img
        height="100%"
        max-width="100vw"
        :src="require('@/assets/web/about.jpg')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  meta: {
    depth: 1,
  },
  head: () => ({
    title: 'About Us',
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

<style></style>
