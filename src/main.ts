import {createApp, VueElement} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import element from'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App);
app.use(router);
app.use(element, { zIndex: 3000, size: 'small' });
app.mount('#app')
