<script setup lang="ts">
useHead({
  title: 'Try Shadcn On Nuxt JS',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})
</script>

<template>
  <NuxtLoadingIndicator color="#3C50E0" :height="5" />
  <NuxtPage />
</template>
