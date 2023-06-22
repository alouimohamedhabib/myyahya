export default defineNuxtConfig({
  modules: [
    '../src/module'
  ],
  yahya: {
    token: "10 out of 10 😎"
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      name: "Mohamed"
    }
  }
})
