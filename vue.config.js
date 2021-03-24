// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  publicPath: '/free-warehouse/',
  pwa: {
    name: 'Free House',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
      // ...other Workbox options...
    }
  }
}

// TODO https://medium.com/@mntlmaxi/how-to-add-client-side-storage-with-vue-c6c72c301f23
