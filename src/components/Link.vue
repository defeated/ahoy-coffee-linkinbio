<template>
  <p>
    <a :href="link.url">
      {{ link.title }}
    </a>
  </p>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({
  link: Object,
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
