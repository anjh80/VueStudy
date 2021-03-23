
<template>
<div id="wrapper">
      <LeftGnb></LeftGnb>
      <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
              <slot></slot>
            </div>
      </div>
</div>
</template>


<script>
import '../assets/css/all.min.css'
import '../assets/css/sb-admin-2.min.css'
import LeftGnb from '../components/LeftGnb.vue'
export default {
      components: {
            LeftGnb
      }
}
</script>


