import Vue from 'vue'
import router from "./router"
import  NotFound from "./pages/404.vue";

const app = new Vue({
      data : {
            currentPathName : window.location.pathname
      },
      computed:{
            ViewComponent(){
                  const pageView = router[this.currentPathName];
                  return pageView ? router[this.currentPathName] : NotFound;
            }
      },
      render(h){
            return h(this.ViewComponent);
      }
}).$mount('#app');

window.addEventListener('popstate', () => {
      app.currentRoute = window.location.pathname;
});
