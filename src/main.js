import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');

createApp(App).use(DevUI).use(router).mount('#app')
