const { defineConfig } = require('@vue/cli-service')
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        /* target: 'http://localhost:3000', */
        target: 'https://master--valley-dojo.netlify.app',
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
};
