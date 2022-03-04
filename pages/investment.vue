<template>
  <v-row no-gutters class="fill-height">
    <v-col
      order="2"
      order-md="2"
      cols="12"
      md="9"
      class="px-6 py-12 px-md-16 pt-md-3 mt-md-10"
    >
      <div class="text-h4 text-md-h2 primary--text mb-9 mb-md-16">
        {{ $t('investment.title') }}
      </div>
      <div class="text-body-1 text-md-h5 mb-7 mb-md-14">
        {{ $t('investment.1') }}
      </div>
      <div id="nextblock" class="text-body-1 text-md-h5 mb-7 mb-md-14">
        {{ $t('investment.3') }}
      </div>
      <v-card flat>
        <v-list dense color="grey lighten-4">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content
              class="text-body-1 text-md-subtitle-1 font-weight-medium"
              v-text="$t(item.title)"
            />
          </v-list-item>
        </v-list>
      </v-card>
      <div
        id="darkblock"
        class="text-body-1 text-md-h5 grey darken-4 white--text pa-7 pa-md-9"
      >
        {{ $t('investment.2') }}
      </div>
    </v-col>
    <v-col order="0" order-md="0" cols="12" md="3">
      <v-img
        height="100%"
        max-width="100vw"
        :src="require('@/assets/web/investment.jpg')"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  meta: {
    depth: 2,
  },
  data: () => ({
    posTop: 180,
    items: [
      {
        title: 'investment.slide.portfolio',
        icon: 'mdi-bank',
      },
      {
        title: 'investment.slide.early',
        icon: 'mdi-finance',
      },
      {
        title: 'investment.slide.private',
        icon: 'mdi-chart-areaspline',
      },
      {
        title: 'investment.slide.crypto',
        icon: 'mdi-bitcoin',
      },
      {
        title: 'investment.slide.direct',
        icon: 'mdi-cash-multiple',
      },
    ],
  }),
  head: () => ({
    title: 'Investment Strategy',
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
#darkblock {
  position: absolute;
  margin-top: 56px;
  left: 0px;
  width: 100vw;
  z-index: 1;
}
.zcontainer {
  z-index: 5;
  position: absolute;
  left: 0;
  width: 100vw;
}
.slider {
  position: absolute;
  margin: auto;
  left: 0;
  z-index: 2;
  width: 100vw;
}
@media (min-width: 960px) {
  .first-text {
    margin-top: 0px;
  }
}
</style>
