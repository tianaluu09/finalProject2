import { mount } from 'svelte';
import './app.css';

import App from './App.svelte';

const app = new App({
  target: document.getElementById('app'),
});

export default app;
