import { defineStore } from "pinia";
import { AxiosError } from "axios";

import {
  type LoginRequest,
  type UpdateProfileRequest,
  type ValidationErrorResponse,
  type User,
} from "@/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    validationErrors: null as ValidationErrorResponse | null,
    user: null as User | null,
  }),

  actions: {
    async login(payload: LoginRequest): Promise<boolean> {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.post(
          "http://127.0.0.1:3334/auth/v1/login",
          payload
        );

        this.$state.validationErrors = null;

        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status == 422) {
            this.$state.validationErrors = error.response?.data;
          }
        } else {
          console.error("Unexpected Error:", error);
        }

        return false;
      }
    },
    async getAuthenticatedUser() {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.get(
          "http://127.0.0.1:3334/auth/v1/profile"
        );

        if (response.status === 200) {
          this.$state.user = response.data.data;
        }

        console.log(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status == 422) {
            this.$state.validationErrors = error.response?.data;
          }
        } else {
          console.error("Unexpected Error:", error);
        }
      }
    },
    async updateProfile(payload: UpdateProfileRequest) {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.put(
          "http://127.0.0.1:3334/auth/v1/profile",
          payload
        );

        console.log(response.data);
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.status == 422) {
            this.$state.validationErrors = error.response?.data;
          }
        } else {
          console.error("Unexpected Error:", error);
        }
      }
    },
    async checkSession(): Promise<boolean> {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.post(
          "http://127.0.0.1:3334/auth/v1/get-session"
        );

        if (response.status != 200) {
          return false;
        }

        return true;
      } catch (error) {
        console.error("Unexpected Error:", error);
        return false;
      }
    },
    async logout(): Promise<boolean> {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.delete(
          "http://127.0.0.1:3334/auth/v1/logout"
        );

        if (response.status != 200) {
          return false;
        }

        return true;
      } catch (error) {
        console.error("Unexpected Error:", error);
        return false;
      }
    },
  },
});
