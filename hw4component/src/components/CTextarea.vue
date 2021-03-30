<template>
      <div>
            <h3 class="join_title"><label :for="id">{{title}}</label></h3>
            <span class="ps_box int_id">
            <textarea :id="id" :name="name"  :title="title" :rows="rows" :cols="cols"   @input="checkText" class="int" ></textarea></span>
            <span class="error_next_box" v-show="isErrorShow" aria-live="assertive">필수 정보입니다.</span>
      </div>
</template>
<script>
export default {
      name: 'c-textarea',
      data(){
            return{
            isErrorShow :true,
            }
      },
      props:{
            title:{
                  type :String,
                  required:true
            },

            id:{
                  type :String,
                  required:true
            },
            name:{
                  type :String,
                  required:true
            },
            rows:{
                  type :String
            },
            cols:{
                  type :String
            }
      },
      methods: {
            checkText(e){
                  if(e.target.value!=""){
                        this.isErrorShow = false;
                  }
                  this.$emit('input',e.target.value);
            }


      },
};
</script>
<style scoped>

.ps_box.int_id, .ps_box.int_id input {
    background: #fff;
    outline: 0;
}

textarea.int {
display: block;
    position: relative;
    width: 100%;
    height: 29px;
    padding-right: 25px;
    border: none;
    background: #fff;
    font-size: 15px;
    box-sizing: border-box;
    z-index: 10;
}
.ps_box, .ps_box_disable {
    display: block;
    position: relative;
    width: 100%;
    height: 51px;
    border: solid 1px #dadada;
    padding: 10px 110px 10px 14px;
    background: #fff;
    box-sizing: border-box;
    vertical-align: top;
}
</style>