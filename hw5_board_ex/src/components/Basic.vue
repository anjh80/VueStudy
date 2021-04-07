<template>

 <table class="table">
  <thead>
    <tr>
      <th scope="col">num</th>
      <th scope="col">title</th>
      <th scope="col">writer</th>
      <th scope="col">writeDate</th>
      <th scope="col">hit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(obj,key) of boardList" :key="key"  >
      <th scope="row">{{key+1}}</th>
      <td><a href='#none' @click="showModal(key)">{{obj.title}}</a></td>
      <td>{{obj.writer}}</td>
      <td>{{obj.writeDate}}</td>
       <td>{{obj.hit}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>

export default {
      name: 'Basic',
      props :{
            boardList : {
                  type  : Array
            }
      },
      methods: {
            showModal(obj){
                  this.$emit('showModal',obj)
            },

      }
}
</script>
<style scoped>
tr{cursor:pointer}
a{font-weight:bold}
</style>
