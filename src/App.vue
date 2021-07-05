<template>
  <Link v-for="link in links" :key="links.indexOf(link)" :link="link"/>
</template>

<script setup>
import Link from './components/Link.vue'

const links = [
  {
    title: "Ahoy Coffee Co.",
    url: "https://www.ahoy.coffee/"
  },
  {
    title: "Blog",
    url: "https://www.ahoy.coffee/blogs/news/"
  },
  {
    title: "Instagram",
    url: "https://instagram.com/coffee.ahoy/"
  },
  {
    title: "Venmo",
    url: "https://account.venmo.com/u/Coffee-Ahoy"
  }
];

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>
