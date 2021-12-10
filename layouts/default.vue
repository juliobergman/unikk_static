<template>
  <v-app dark>
    <v-main>
      <app-bar />
      <app-drawer />
      <app-navigator />
      <v-container fluid fill-height class="ma-0 pa-0">
        <transition :name="$store.state.transition" mode="in-out">
          <Nuxt />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-200vh);
}
.slide-up-leave-to,
.slide-down-enter {
  opacity: 0;
  transform: translateY(-100vh);
}
.slide-down-leave-to,
.slide-up-enter {
  opacity: 0;
  transform: translateY(100vh);
}

.slide-enter-active,
.slide-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
</style>
