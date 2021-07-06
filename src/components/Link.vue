<template>
  <li>
    <a :href="link.url" class="block px-6 py-4">{{ link.title }}</a>
  </li>
</template>

<script setup>
defineProps({
  link: Object,
})
</script>

<style scoped>
a {
  color: #0C2560;
  background: #FDE68A;
}
a:hover {
  background: #FEF3C7;
}
</style>
