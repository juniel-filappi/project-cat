<template>
  <button
      class="transition ease-in-out delay-50 py-2 px-4 text-white uppercase flex items-center gap-2 bg-ultraViolet rounded-xl shadow-[2px_2px_2px_1px_rgba(0,0,0,0.7)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 hover:brightness-75"
      @click="handleClick"
    >
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  emits: ['click'],
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>