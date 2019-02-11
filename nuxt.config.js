const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: 'https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/recaptcha.js' },
      { src: 'https://emailoctopus.com/bundles/emailoctopuslist/js/1.3/formEmbed.js' },
      { src: '/js/bootstrap.js' },
      { src: '/js/modernizr.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600', type: 'text/css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bootstrap.css',
    '~/assets/css/gaia.css',
    '~/assets/css/fonts/pe-icon-7-stroke.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
