import { createApp } from 'vue';
import App from './App.vue'; // Make sure this import is back
import { createRouter, createWebHistory } from 'vue-router';
import StayComponent from './components/StayComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import ContactComponent from './components/ContactComponent.vue';

// Define the routes as components
const routes = [
  { path: '/', component: StayComponent },
  { path: '/services', component: ServicesComponent },
  { path: '/contact', component: ContactComponent }
];

// Instance of the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create an instance of the app and use the router
const app = createApp(App); // Pass the App component here
app.use(router);
app.mount('#app')