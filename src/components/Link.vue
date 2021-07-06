<template>
  <li>
    <a :href="link.url" class="block px-6 py-4">{{ link.title }}</a>
  </li>
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
