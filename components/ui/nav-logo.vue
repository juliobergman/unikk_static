<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288.02 288.01">
    <g clip-path="url(#clip0)" :fill="fill">
      <path
        d="M86.05,162.05,59.1,108.15l47.2-94.39h53.9Zm-20.24-53.9,20.24,40.49L150.49,19.76H110ZM53.63,97.21,15.52,21A5,5,0,0,1,20,13.76H95.35Zm-31.29-76L53.63,83.79l32-64H23.23A1,1,0,0,0,22.34,21.21ZM154.53,299,124,237.84,236,13.76h62A5,5,0,0,1,302.48,21l-139,278A5,5,0,0,1,154.53,299Zm-23.87-61.16,27.45,54.9a1,1,0,0,0,1.78,0L295.66,21.21a1,1,0,0,0-.89-1.45H239.7ZM118.47,226.9,91.52,173,171.14,13.76H225ZM98.23,173l20.24,40.48L215.34,19.76H174.85Z"
        transform="translate(-14.99 -13.76)"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    dark: { type: Boolean, default: true },
  },
  computed: {
    fill() {
      return this.dark ? '#ffffff' : '#121212'
    },
  },
}
</script>

<style></style>
