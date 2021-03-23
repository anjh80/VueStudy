<template>
 <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <li  v-for="(value,key) in linkObj" class="nav-item" :class="{active : isActive}" :key="key">
                  <a class="nav-link" :href="value.link" >
                        <i :class="value.iClass"></i>
                    <span>{{value.title}}</span>
                  </a>
            </li>
            <hr class="sidebar-divider">

        </ul>
        <!-- End of Sidebar -->
</template>

<script>
export default {
  name : "LeftGnb",
  data(){
        return {
              linkObj : [
                    {
                        link : "/",
                        iClass : "fas fa-fw fa-tachometer-alt",
                        title :"DashBoard",
                    },
                    {
                        link : "/board",
                        iClass : "fas fa-fw fa-wrench",
                        title :"Board",
                    },
                    {
                        link : "/statics",
                        iClass : "fas fa-fw fa-folder",
                        title :"Statics",
                    },
              ]
        }
  },
  computed: {
    isActive() {
      let current_href_arr = location.href.split("/");
      return this.linkObj.link === current_href_arr[3];
    },
  }
};
</script>