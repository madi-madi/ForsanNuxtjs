// const pkg = require('./package')


// module.exports = {
//   mode: 'universal',

//   /*
//   ** Headers of the page
//   */
//   head: {
//     title: pkg.name,
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: pkg.description }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   /*
//   ** Customize the progress-bar color
//   */
//   loading: { color: '#fff' },

//   /*
//   ** Global CSS
//   */
//   css: [
//   ],

//   /*
//   ** Plugins to load before mounting the App
//   */
//   plugins: [
//   ],

//   /*
//   ** Nuxt.js modules
//   */
//   modules: [
//   ],

//   /*
//   ** Build configuration
//   */
//   build: {
//     /*
//     ** You can extend webpack config here
//     */
//     extend(config, ctx) {
      
//     }
//   }
// }
export default {
  router: {
    extendRoutes(routes, resolve) {
      const indexIndex = routes.findIndex(route => route.name === 'index')
      let index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
      routes[indexIndex].children[index] = {
        ...routes[indexIndex].children[index],
        components: {
          default: routes[indexIndex].children[index].component,
          left: resolve(__dirname, 'components/childLeft.vue')
        },
        chunkNames: {
          left: 'components/childLeft'
        }
      }

      index = routes.findIndex(route => route.name === 'main')
      routes[index] = {
        ...routes[index],
        components: {
          default: routes[index].component,
          top: resolve(__dirname, 'components/mainTop.vue')
        },
        chunkNames: {
          top: 'components/mainTop'
        }
      }
    }
  }
}
 