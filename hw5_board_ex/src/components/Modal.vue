<template>
<div>
  <b-modal id="modal-1">
        <div class="d-block" v-for="(value,item) in boardView" :key='item' v-html="value"></div>
  </b-modal>
</div>
</template>
<script>
export default {
      name: 'Modal',
      props :{
            boardView :{
                  type : Object
            }
      }

};
</script>
<style scoped>
img {width:100%}
</style>