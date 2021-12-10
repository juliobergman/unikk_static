<template>
  <v-footer fixed color="rgba(0,0,0,0)" :dark="$store.state.darknav">
    <v-card tile flat color="rgba(0,0,0,0)" width="100%" class="text-center">
      <v-btn
        class="mx-2"
        icon
        :disabled="disablePrev"
        @click="goto($store.state.navprev)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        icon
        :disabled="disableNext"
        @click="goto($store.state.navnext)"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  computed: {
    disableNext() {
      return this.$store.state.navnext === false
    },
    disablePrev() {
      return this.$store.state.navprev === false
    },
  },
  beforeMount() {
    window.addEventListener('keyup', this.HandleKeyUp)
  },
  methods: {
    goto(route) {
      this.$router.push({ name: route })
    },
    HandleKeyUp(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        this.goto(this.$store.state.navnext)
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        this.goto(this.$store.state.navprev)
      }
    },
  },
}
</script>

<style></style>
