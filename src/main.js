import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false    //关闭生产提示

// 引入iconfont字体库
import '@/assets/iconfont/iconfont.css'

// 按需引入element-ui组件库
import { Carousel, CarouselItem } from 'element-ui';
// 注册element-ui组件
Vue.component("el-carousel", Carousel)
Vue.component("el-carousel-item", CarouselItem)

// 引入路由
import router from '@/router'

// 引入store
import store from '@/store'

new Vue({
  render: h => h(App),
  //注册路由
  //注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册store，组件身上都有$store属性
  store
}).$mount('#app')
