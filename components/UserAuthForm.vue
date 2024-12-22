<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const isLoading = ref(false);
const router = useRouter();
const store = useAuthStore();
const email = ref("");
const password = ref("");

async function onSubmit(event: Event) {
  isLoading.value = true;

  store
    .login({ email: email.value, password: password.value })
    .then((res) => {
      if (res) {
        router.push("/dashboard");
      }
    })
    .finally(() => {
      isLoading.value = false;
    });
}

onBeforeMount(() => {
  store.checkSession().then((res) => {
    if (res) {
      router.push("/dashboard");
    }
  });
});
</script>

<template>
  <div :class="cn('grid gap-6', $attrs.class ?? '')">
    <form @submit.prevent="onSubmit">
      <div class="grid gap-2">
        <div class="grid gap-1">
          <Label class="sr-only" for="email"> Email </Label>
          <Input
            id="email"
            v-model="email"
            placeholder="name@example.com"
            type="email"
            auto-capitalize="none"
            auto-complete="email"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <div class="grid gap-1">
          <Label class="sr-only" for="password"> Password </Label>
          <Input
            v-model="password"
            id="password"
            type="password"
            placeholder="*****"
            auto-capitalize="none"
            auto-complete="password"
            auto-correct="off"
            :disabled="isLoading"
          />
        </div>
        <Button :disabled="isLoading">
          <LucideLoaderCircle
            v-if="isLoading"
            class="mr-2 h-4 w-4 animate-spin"
          />
          Sign In with Email
        </Button>
      </div>
    </form>
    <div class="relative">
      <div class="absolute inset-0 flex items-center">
        <span class="w-full border-t" />
      </div>
      <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <Button variant="outline" type="button" :disabled="isLoading">
      <LucideLoaderCircle v-if="isLoading" class="mr-2 h-4 w-4 animate-spin" />
      <LucideGithub v-else class="mr-2 h-4 w-4" />
      GitHub
    </Button>
  </div>
</template>
