<script setup lang="ts">
// import AuthsDefaultAuthCard from "@/components/Auths/AuthsDefaultAuthCard.vue";
// import AuthsInputGroup from "@/components/Auths/AuthsInputGroup.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import { ref } from "vue";

const store = useAuthStore();

const fullname = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");

function register() {
//   store.register({ email: email.value, password: password.value });
}

</script>

<template>
  <AuthLayout>
    <AuthsDefaultAuthCard subtitle="Start for free" title="Sign Up to TailAdmin">
      <form>
        <AuthsInputGroup label="Full Name" type="text" placeholder="Enter your full name">
          <SvgAccount />
        </AuthsInputGroup>

        <AuthsInputGroup label="Email" type="email" placeholder="Enter your email">
          <SvgMail />
        </AuthsInputGroup>

        <AuthsInputGroup
          label="Password"
          type="password"
          placeholder="Enter your password"
        >
          <SvgLock />
        </AuthsInputGroup>

        <AuthsInputGroup
          label="Re-type Password"
          type="password"
          placeholder="Re-enter your password"
        >
          <SvgLock />
        </AuthsInputGroup>

        <div class="mb-5 mt-6">
          <input
            type="submit"
            value="Create account"
            class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
          />
        </div>

        <button
          class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 font-medium hover:bg-opacity-80 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-80"
        >
          <span>
            <SvgGoogle />
          </span>
          Sign up with Google
        </button>

        <div class="mt-6 text-center">
          <p class="font-medium">
            Already have an account?
            <NuxtLink to="/" class="text-primary">Sign in</NuxtLink>
          </p>
        </div>
      </form>
    </AuthsDefaultAuthCard>
  </AuthLayout>
</template>
