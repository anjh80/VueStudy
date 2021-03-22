<template>
<div id="wrapper">
      <LeftGnb></LeftGnb>
      <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
             <h1>Board</h1>
            </div>
      </div>
</div>
</template>
<script>
import "../assets/css/all.min.css"
import "../assets/css/sb-admin-2.min.css"
import LeftGnb from './LeftGnb.vue'
export default{
      name : "Board",
      components :{LeftGnb}
}
</script>