<template>
<div>
    <b-button-group>
      <b-button variant="outline-primary" @click="changeBoard('basic')">
        <b-icon icon="journal-text"></b-icon> 기본
      </b-button>
      <b-button variant="outline-primary" @click="changeBoard('gallery')">
        <b-icon icon="journal-medical"></b-icon> Gallery형
      </b-button>
      <b-button variant="outline-primary" @click="changeBoard('webzine')">
        <b-icon icon="layout-wtf"></b-icon> Webzine
      </b-button>
    </b-button-group>
  </div>
</template>
<script>
export default {
      name: 'Type',
      data(){
            return {
                  boardType : "basic"
            }
      },
      methods: {
            changeBoard(boardType){
                  this.boardType = boardType;
                  this.$emit('changeBoard',this.boardType);
            }
      },
};
</script>
<style scoped>

</style>