<script setup lang="ts">
import { useColorMode, useWebSocket } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/vue";
import Search from "~/components/Search.vue";
const colorMode = useColorMode();

const store = useAuthStore();
const router = useRouter();

onMounted(() => {
  // const { status, data, send, open, close } = useWebSocket(
  //   "ws://127.0.0.1:3335/ws/v1/notification/a4056971-c38f-4aa6-84de-2b43165a4463",
  //   {
  //     autoReconnect: true,
  //     onMessage(ws, event) {
  //       let data = JSON.parse(event.data)
  //     },
  //   }
  // );
});

onBeforeMount(() => {
  // store.checkSession().then((res) => {
  //   if (!res) {
  //     router.push("/login");
  //   }
  // });
});
</script>
<template>
  <div class="flex-col flex">
    <div class="border-b">
      <div
        class="flex h-16 items-center px-4 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950"
      >
        <MainNav class="mx-6" />

        <Search />
        <div class="ml-auto flex items-center space-x-4">

          <Notification />
          <UserNav />
        </div>
      </div>
    </div>

    <!-- CONTENT -->
  </div>
</template>
