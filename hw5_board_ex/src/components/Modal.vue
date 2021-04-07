<template>
<div>
  <b-modal id="modal-1">
    <div class="d-block">{{boardView.title}}</div>
    <div class="d-block">
          <img :src='boardView.thumNail'>
    </div>
    <div class="d-block">{{boardView.content}}</div>
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