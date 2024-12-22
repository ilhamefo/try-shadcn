<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-6 dark:text-slate-300', $attrs.class ?? '')"
  >
    <a
      href="#"
      class="text-sm font-medium transition-colors hover:text-primary hidden md:flex"
    >
      Overview
    </a>
    <a
      href="#"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:flex"
    >
      Customers
    </a>
    <a
      href="#"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:flex"
    >
      Products
    </a>
    <a
      href="#"
      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hidden md:flex"
    >
      Settings
    </a>
  </nav>
</template>