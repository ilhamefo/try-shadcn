<script setup lang="ts">
import AppSidebar from './components/AppSidebar.vue';
import SidebarProvider from './components/ui/sidebar/SidebarProvider.vue';
import SidebarTrigger from './components/ui/sidebar/SidebarTrigger.vue';


</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarTrigger />
  </SidebarProvider>
</template>