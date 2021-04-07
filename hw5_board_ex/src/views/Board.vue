<template>
<div class="container">
      <v-type @changeBoard="changeBoard"></v-type>
      <v-basic v-if="boardType==='basic'" :boardList="boardList" @showModal="showModal"></v-basic>
      <v-gallery v-if="boardType==='gallery'" :boardList="boardList" @showModal="showModal"></v-gallery>
      <v-webzine v-if="boardType==='webzine'" :boardList="boardList" @showModal="showModal"></v-webzine>
      <v-modal :boardView="boardView"></v-modal>
      </div>
</template>

<script>
import VType from '@/components/Type'
import VBasic from '@/components/Basic'
import VGallery from '@/components/Gallery'
import VWebzine from '@/components/Webzine'
import VModal from '@/components/Modal'
export default {
  name: 'Board',
  components: {VType, VBasic, VGallery, VWebzine, VModal},
  data(){
            return {
                  boardView : {},
                  boardType : 'basic',
                  boardList : [
                        {
                              'title' : 'BootstrapVue Argon Dashboard PRO',
                              'content' : 'BootstrapVue Argon Dashboard PRO is a completely new product built on our newest re-built from scratch framework structure that is meant to make our products more intuitive, more adaptive and, needless to say, so much easier to customize. Let Argon amaze you with its cool features and build tools and get your project to a whole new level.',
                              'writeDate' : '2021-04-05',
                              'writer'   : 'anjihun',
                              'hit'      : '0',
                              'thumNail' : 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/bootstrap-vue-argon-dashboard-pro/opt_badp_thumbnail.jpg'
                        },
                        {
                              'title' : '22222222222222222222',
                              'content' : '테스트입니다.테스트테스트테스트',
                              'writeDate' : '2021-04-06',
                              'writer'   : 'anjihun2',
                              'hit'      : '2',
                              'thumNail' : 'http://www.pixeden.com/media/k2/galleries/468/001-business-card-clip-brand-mock-up-vol-20-psd.jpg'
                        },
                        {
                              'title' : '3333333333333333333333333',
                              'content' : '내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용\n',
                              'writeDate' : '2021-04-07',
                              'writer'   : 'anjihun3',
                              'hit'      : '4',
                              'thumNail' : 'http://www.pixeden.com/media/k2/galleries/511/001-business-card-mockup-vol-22-box-brand-psd.jpg'
                        },
                        {
                              'title' : '444444444',
                              'content' : '내용4444',
                              'writeDate' : '2021-04-07',
                              'writer'   : 'anjihun4',
                              'hit'      : '5',
                              'thumNail' : 'https://i.ibb.co/1MyVr6S/preview-dexam.png'
                        },
                         {
                              'title' : 'BootstrapVue Argon Dashboard',
                              'content' : 'BootstrapVue Argon Dashboard is built with over 100 individual components, giving you the freedom of choosing and combining. All components can take variations in color, that you can easily modify using SASS files.',
                              'writeDate' : '2021-04-07',
                              'writer'   : 'anjihun4',
                              'hit'      : '2',
                              'thumNail' : 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/bootstrap-vue-argon-dashboard/opt_ad_bootstrapvue_thumbnail.jpg'
                        },

                  ]
            }
      },
  methods: {
        changeBoard : function(boardType){
             this.boardType = boardType;
        },
        showModal : function(index){
              this.boardView = this.boardList[index];
              this.boardList[index].hit = parseInt(this.boardList[index].hit,10) + 1;
              this.$root.$emit('bv::toggle::modal', 'modal-1', '#btnToggle');
        }
  }

}
</script>
