<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "~/lib/utils";
import ScrollArea from "./ui/scroll-area/ScrollArea.vue";
import type { NotificationProps } from "~/types/dashboard";

const selectedMail = defineModel<string>("selectedMail", { required: false });

const props = defineProps<{
  data: NotificationProps[];
}>();

const isLoading = ref(true);

onMounted(() => {

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<template>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
      <SheetDescription> Here's your notification. </SheetDescription>
    </SheetHeader>
    <ScrollArea class="h-5/6 flex">
      <div class="grid gap-4 py-4">
        <div v-if="isLoading">
          <Skeleton class="h-28 rounded-lg w-full mb-3" v-for="item in 6" />
        </div>

        <button
          v-else
          v-for="item of props.data"
          :class="
            cn(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
              'dark:text-slate-200',
              selectedMail === item.id && 'bg-muted'
            )
          "
        >
          <div class="flex w-full flex-col gap-1">
            <div class="flex items-center">
              <div class="flex items-center gap-2">
                <div class="font-semibold">
                  {{ item.title }}
                </div>
                <span class="flex h-2 w-2 rounded-full bg-blue-600" />
              </div>
              <div
                :class="
                  cn(
                    'ml-auto text-xs',
                    selectedMail === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  )
                "
              >
                {{ item.created_at }}
              </div>
            </div>

            <div class="text-xs font-medium">
              {{ item.subject }}
            </div>
          </div>
          <div class="line-clamp-2 text-xs text-muted-foreground">
            {{ item.message.substring(0, 300) }}
          </div>
          <div class="flex items-center gap-2">
            <!-- <Badge
              v-for="label of item.labels"
              :key="label"
              :variant="getBadgeVariantFromLabel(label)"
            >
              {{ label }}
            </Badge> -->
          </div>
        </button>
      </div>
    </ScrollArea>
    <SheetFooter>
      <SheetClose as-child>
        <Button type="submit" class="my-10"> Close </Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</template>
