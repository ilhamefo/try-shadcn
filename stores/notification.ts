import { defineStore } from "pinia";
import { type Notifications } from "@/types/auth";
import { AxiosError } from "axios";

export const useNotificationStore = defineStore("notification", {
  state: () => ({
    notifications: null as Notifications[] | null,
  }),

  actions: {
    async getNotifications() {
      try {
        const { $axios } = useNuxtApp();

        const response = await $axios.get(
          "http://127.0.0.1:3334/auth/v1/notifications?limit=10&page=1"
        );

        if (response.status === 200) {
          this.$state.notifications = response.data.data;
        }

      } catch (error) {
        if (error instanceof AxiosError) {
          console.log("Unexpected Error:", error);
        } else {
          console.log("Unexpected Error:", error);
        }

      }
    },
  },
});
