<template >
<div>
      <div class="card" v-for="(obj,key) of boardList" :key="key">
      <div class="row no-gutters">
            <div  aria-hidden="true" class="bg-dark col-md-6 col-lg-4 col-xl-4">
                  <div  class="b-aspect d-flex h-100 align-items-center">
                        <div class="b-aspect-sizer flex-grow-1" style="padding-bottom: 75%; height: 0px;"></div>
                        <div class="b-aspect-content flex-grow-1 w-100 mw-100" style="margin-left: -100%;">
                              <img  :src="obj.thumNail" alt="Image" class="rounded-0 card-img">
                        </div>
                  </div>
            </div>
            <div  class="d-flex flex-column p-4 col">
                  <h2  id="theme-label-0" class="h5 mb-3">{{obj.title}}</h2>
                  <p  class="card-text flex-grow-1">{{obj.content}}</p>
                  <p  class="card-text text-muted small"><span  class="d-block d-lg-inline-block mb-2 mb-lg-0"><strong >Writer:</strong> {{obj.writer}}</span> <span  class="d-block d-lg-inline-block ml-lg-3"><i ><strong >writeDate:</strong> {{obj.writeDate}}</i></span></p>
            </div>
      </div>
      </div>
</div>
</template>
<script>
export default {
      name: 'Gallery',
      props : {
             boardList : {
              type  : Array
            }
      }
};
</script>
<style scoped>
.card {
    overflow: hidden;
    box-shadow: 0 25px 20px -20px rgb(0 0 0 / 30%), 0 0 15px rgb(0 0 0 / 6%);
}
</style>