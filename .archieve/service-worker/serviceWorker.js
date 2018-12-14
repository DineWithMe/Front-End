const cacheName = 'v1'

// Activate Event
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          // delete old cache
          return caches.delete(cache)
        }
      })
    })
  )
})

// Fetch Event
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make a copy of response
        const resClone = res.clone()
        // open cache
        caches.open(cacheName).then((cache) => {
          // add response to cache, e.request as key and resClone as value
          // eslint-disable-next-line no-console
          cache.put(e.request, resClone).catch(console.log)
        })
        return res
      })
      .catch(() => caches.match(e.request).then((res) => res))
  )
})
