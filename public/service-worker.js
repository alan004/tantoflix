// service-worker.js

import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

// Precache all of the assets in the public folder
precacheAndRoute(self.__WB_MANIFEST);

// Use a stale-while-revalidate strategy for navigation requests
const navigationRoute = new NavigationRoute(new StaleWhileRevalidate());
registerRoute(navigationRoute);

// Optionally, you can add more custom routes or strategies as needed
// registerRoute(
//   new RegExp('^https://api.example.com'),
//   new NetworkFirst()
// );

// Add event listeners for push notifications, background sync, etc.
self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});

// Add more custom event listeners as needed
