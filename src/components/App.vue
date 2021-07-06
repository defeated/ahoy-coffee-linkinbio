<template>
  <div class="max-w-7xl mx-auto p-4 sm:px-6 lg:p-8">
    <div class="max-w-3xl mx-auto">

      <nav class="bg-white shadow overflow-hidden rounded-md">
        <ul class="divide-y divide-gray-200">

          <Link v-for="link in links" :key="links.indexOf(link)" :link="link" />

        </ul>
      </nav>

    </div>
  </div>
</template>

<script setup>
import Link from './Link.vue'

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
