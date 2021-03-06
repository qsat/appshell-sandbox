const path = require('path')
const withCSS = require('@zeit/next-css')
const withOffline = require('next-offline')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkboxPlugin = require('workbox-webpack-plugin');

const nextConfig = {
  webpack: (config, {dev, isServer}) => {
    if (isServer || dev) return config

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
            src: 'static/icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }),
      // new WorkboxPlugin.InjectManifest({
      //   swSrc: './service-worker.js',
      // }),
    )

    return config
  },

  workboxOpts: {
    // swSrc: 'service-worker.js',
    // generateSw: false,
    // generateInDevMode: true,
    swDest: 'service-worker.js',
    // devSwSrc: 'service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}

module.exports = withCSS(withOffline(nextConfig))
