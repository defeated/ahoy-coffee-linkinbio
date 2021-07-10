<template>
  <nav>
    <ul class="mx-auto max-w-2xl py-4 px-8 -mt-14">
      <Link v-for="link in links" :key="links.indexOf(link)"
        :link="link" :icons="icons" />
    </ul>
  </nav>
</template>

<script setup>
import Link from './Link.vue'

import {
  GlobeAltIcon, DocumentTextIcon, CameraIcon, CreditCardIcon
} from '@heroicons/vue/outline'

const icons = {
  GlobeAltIcon, DocumentTextIcon, CameraIcon, CreditCardIcon
}

const links = [
  {
    title: "Ahoy Coffee Co.",
    url: "https://www.ahoy.coffee/",
    icon: "GlobeAltIcon",
  },
  {
    title: "Blog",
    url: "https://www.ahoy.coffee/blogs/news/",
    icon: "DocumentTextIcon",
  },
  {
    title: "Instagram",
    url: "https://instagram.com/coffee.ahoy/",
    icon: "CameraIcon",
  },
  {
    title: "Venmo",
    url: "https://instagram.com/coffee.ahoy/",
    icon: "CreditCardIcon",
  },
];

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped>
</style>
