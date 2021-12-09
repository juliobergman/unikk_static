<template>
  <v-footer fixed color="rgba(0,0,0,0)" :dark="true">
    <v-card tile flat color="rgba(0,0,0,0)" width="100%" class="text-center">
      <v-btn class="mx-2" icon @click="goto('prev')">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn class="mx-2" icon @click="goto('next')">
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style></style>
