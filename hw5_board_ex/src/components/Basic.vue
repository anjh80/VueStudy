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
    <tr v-for="(obj,key) of boardList" :key="key">
      <th scope="row">{{key+1}}</th>
      <td>{{obj.title}}</td>
      <td>{{obj.writer}}</td>
      <td>{{obj.writeDate}}</td>
       <td>{{obj.hit}}</td>

    </tr>
    <!--
    <tr @click="toggleModal">
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    -->

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
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle')
    }
}
}
</script>
