<template>
  <v-form>
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" md="7">
          <v-text-field v-model="rollingInfo.title" label="Title" required></v-text-field>
        </v-col>
        <v-col cols="12" md="7">
          <v-text-field v-model="rollingInfo.target" label="Target" required></v-text-field>
        </v-col>

        <RollingUploadComponent @setFileInfos="setFileInfos"></RollingUploadComponent>

        <v-col cols="12" md="7">
          <v-radio-group v-model="rollingInfo.s_img">
            <v-row class="justify-center">
              <div class="ma-6" v-for="(item,i) in rollingInfo.imgSrc" :key="i">
                <v-img class="ma-2" :src="item.url" contain height="15vh" width="15vw" src=`http:localhost:8080/${}`>
                <v-row>
                  <v-radio :label="item.name" :value="i"></v-radio>
                  <v-btn @click="clickRemoveBtn(i)">삭제</v-btn>
                </v-row>
              </div>
            </v-row>
          </v-radio-group>
        </v-col>

        <v-col cols="12" md="7">
          <v-btn class="ma-xl-auto" color="success" @click="handleClickAdd" style="float: right">ADD</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>
<script setup>
  import {ref} from "vue";
  import {addRolling, addUrlItem} from "@/apis/rolling/rollingApis";
  import RollingUploadComponent from "@/components/rolling/RollingUploadComponent.vue";



  const rollingInfo = ref({title: null, target: null, imgSrc: [], s_img: 0})
  const imgInfo = ref({name:null, files:[]})
  const emits = defineEmits(['handleMoveList'])


  const clickRemoveBtn = (i) => {
    rollingInfo.value.imgSrc.pop(i)
  }


  const handleClickAdd = async () => {
    console.log(rollingInfo.value)
    console.log(imgInfo.value)
    imgInfo.value.name = rollingInfo.value.title
   await addUrlItem(imgInfo.value)
    //await addRolling(rollingInfo.value)

    //emits('handleMoveList')
  }

  const setFileInfos = (files) => {
    rollingInfo.value.imgSrc = files
    imgInfo.value.files = files
  }
</script>

<style scoped>

</style>
