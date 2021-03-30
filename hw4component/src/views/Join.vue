<template>
      <form>
            <div id="content">
                  <c-input type="text" title="이름" id="id" name="id" max-length="20" v-model="dataId"></c-input>
                  <c-input type="password" title="비밀번호" id="password" name="password" max-length="11" v-model="dataPass"></c-input>
                  <c-input type="email" title="이메일" id="email" name="email" max-length="20" v-model="dataEmail"></c-input>
                    <c-select title="사는 지역" id="addr" name="addr"
                        :addrArr="addrArr"
                        v-model="selectedAddr"
                  ></c-select>
                  {{selectedAddr}}
                  <c-textarea  title="자기소개" id="content" name="content" cols="33"  rows="5" v-model="dataContent"></c-textarea>

            </div>
      </form>
</template>
<script>
import CInput from "@/components/CInput"
import CSelect from "@/components/CSelect"
import CTextarea from "@/components/CTextarea"
export default {
      name: 'Join',
      components: {
            CInput,
            CSelect,
            CTextarea
      },
      data() {
            return {
                  addrArr : ['서울','경기','대전','대구','부산','강원','제주'],
                  dataId: '',
                  dataPass : '',
                  dataEmail : '',
                  dataContent :'',
                  selectedAddr :''
            };
      }
};
</script>
<style scoped>
#content {
    width: 460px;
    margin: 0 auto;
}

</style>