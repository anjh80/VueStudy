<template>
      <div>
            <h3 class="join_title"><label :for="id">{{title}}</label></h3>
            <span class="ps_box int_id">
                  <select  @change="onChange($event)" class="int" v-model="key" :id="id" :name="name"  :title="title">
                  <option v-for="(value,key) of addrArr" :key="key">{{value}}</option>
                  </select></span>
            <span class="error_next_box" v-show="isErrorShow" aria-live="assertive">필수 정보입니다.</span>
      </div>
</template>
<script>
export default {
      name: 'c-select',
      data(){
            return{
            isErrorShow :true,
            }
      },
      props:{
            addrArr :{
                  type : Array
            },
            title:{
                  type :String,
                  required:true
            },
            type:{
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
            }
      },
      methods: {
            onChange(e){
                  if(e.target.value!=""){
                        this.isErrorShow = false;
                  }

                  this.$emit('input',e.target.value);
            }


      },
};
</script>
<style scoped>


select.int {
display: block;
    position: relative;
    width: 100%;
    height: 29px;
    padding-right: 25px;
    line-height: 29px;

    background: #fff;
    font-size: 15px;
    box-sizing: border-box;
    z-index: 10;
}

</style>