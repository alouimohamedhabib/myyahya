import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  token: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'yahya',
    configKey: 'yahya',
    version: "2.16",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  // Default configuration options of the Nuxt module
  defaults: {
    token: "1222"
  },
  hooks: {
  },

  setup(options, nuxt) {
    nuxt.options.runtimeConfig.public.name = "New name"
    nuxt.options.runtimeConfig.public.yahya = defu(nuxt.options.runtimeConfig.public.strapi, options)


    const resolver = createResolver(import.meta.url)
    // nuxt.hook('pages:extend', (pages) => {
    //   log(pages)
    // })
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addComponent({
      name: "YahyaChamp",
      filePath: resolver.resolve("./runtime/components/MyYahya.vue"),

    })
  }
})
