import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.baseUrl,
    withCredentials: true, // Ensures cookies/credentials are included
  });

  let csrfToken = null;

  // loadCsrf();

  async function loadCsrf() {
    // Fetch CSRF token on initialization
    try {
      const response = await axios.get(
        "http://127.0.0.1:3334/auth/v1/csrf-token",
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("Failed to fetch CSRF token:", error);
    }
  }

  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      loadCsrf()

      return config;
    },
    (error) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Handle successful response
      return response;
    },
    (error) => {
      // Handle response error
      if (error.response && error.response.status === 401) {
        // Redirect to login/logout user if needed
        console.error("Unauthorized: ", error);
      }
      return Promise.reject(error);
    }
  );

  // Provide the Axios instance to Nuxt app
  return {
    provide: { axios: axiosInstance },
  };
});
