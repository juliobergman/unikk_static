<template>
  <div class="main-container fill-height pa-0 ma-0">
    <three-earth />
    <div
      class="content text-subtitle-2 text-md-h4 white--text mt-auto mb-16 mx-auto mb-md-16 mx-0 pa-5 pa-md-16"
    >
      {{ $t('geofocus.2') }}
    </div>
  </div>
</template>

<script>
export default {
  meta: {
    depth: 4,
  },
}
</script>

<style scoped>
.main-container {
  background-color: #252525;
  width: 100%;
}
.main-container .content {
  position: fixed;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.6);
}
@media (min-width: 960px) {
  .main-container .content {
    bottom: 64px;
  }
}
</style>
