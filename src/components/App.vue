<template>
  <nav>
    <ul class="mx-auto max-w-2xl py-4 px-8 -mt-14">

      <link-item v-for="link in links" :key="links.indexOf(link)"
        :link="link" />

    </ul>
  </nav>
</template>

<script setup>
import LinkItem from './LinkItem.vue'
import links from '../data/link_items.json'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped>
</style>
