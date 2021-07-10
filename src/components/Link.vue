<template>
  <li>
    <a :href="link.url"
      class="block p-6 mb-3 shadow-md rounded-md opacity-95
      bg-gray-100 text-blue-900
      hover:bg-red-100 hover:text-red-700
      active:bg-red-400 active:text-white">

      <component :is="icons[link.icon]"
        class="w-5 h-5 mr-4 inline align-text-bottom" />

      {{ link.title }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  link: Object,
  icons: Object,
})
</script>

<style scoped>
</style>
