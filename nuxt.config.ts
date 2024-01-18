// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // add the module to nuxt
  modules: ["@nuxtjs/supabase"],
  // turn off required login
  supabase: {
    redirect: false,
  },
});
