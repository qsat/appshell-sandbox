importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// workbox.precache([]); /* placeholder */
//
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
// Enable navigation preload.
workbox.navigationPreload.enable();

// Swap in NetworkOnly, CacheFirst, or StaleWhileRevalidate as needed.
const strategy = new workbox.strategies.NetworkFirst({
  cacheName: 'cached-navigations',
  plugins: [
    // Any plugins, like workbox.expiration, etc.
  ],
});

const navigationRoute = new workbox.routing.NavigationRoute(strategy, {
  // Optionally, provide a white/blacklist of RegExps to determine
  // which paths will match this route.
    whitelist: [
      /^\/$/,
      /^\/about\/?$/,
      /^\/bar\/?$/
    ]
  // blacklist: [],
});

workbox.routing.registerRoute(navigationRoute);

// workbox.router.registerNavigationRoute(
//   '/app-shell',
//   {
//     whitelist: [
//       /^\/$/,
//       /^\/about\/?$/,
//       /^\/bar\/?$/
//     ]
//   },
// );
