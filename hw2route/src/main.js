import Vue from 'vue'
import router from "./router"

const app = new Vue({
      data : {
            currentPathName : window.location.pathname
      },
      computed:{
            ViewComponent(){
                  return router[this.currentPathName];
            }
      },
      render(h){
            return h(this.ViewComponent);
      }
}).$mount('#app');


window.addEventListener('popstate', () => {
      app.currentRoute = window.location.pathname;
});
