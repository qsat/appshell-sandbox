const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const withCSS = require('@zeit/next-css')
const dist = __dirname

module.exports = withCSS({
  webpack: (config, {isServer}) => {
    if (isServer) return config

    config.plugins.push(
      new WebpackPwaManifest({
        filename: 'manifest.json',
        name: 'AppShellSandbox',
        short_name: 'AShell',
        start_url: '/',
        display: 'standalone',
        background_color: '#f0f0f0',
        theme_color: '#ffffff',
        crossorigin: 'use-credentials',
        description: 'A simple PWA.',
        icons: [
          {
            src: path.resolve('assets/icon.png'),
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      })
    )
    config.plugins.push(
      new WorkboxWebpackPlugin.GenerateSW({
        swDest: dist + '/.next/serviceworker.js',
        // globPatterns: ['.next/static/**/*.js'],
        // globDirectory: '.',
        // precacheManifestFilename: dist + '/.next/static/wb-manifest.[manifestHash].js',
        clientsClaim: true,
        skipWaiting: true,
      })
    )

    return config
  }
})
