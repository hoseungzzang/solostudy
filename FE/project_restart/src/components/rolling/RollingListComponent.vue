<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn class="ma-4" color="success">ADD</v-btn>
        <v-form class="ma-4 searchBox">
          <v-combobox class="searchTypeBox" label="Type" v-model="searchBox.searchType" :items="searchBox.items"
                      variant="underlined"></v-combobox>
          <v-text-field class="searchValueBox" v-model="searchBox.searchValue" label="Keyword" variant="underlined"
                        required></v-text-field>
          <v-btn variant="text" style="margin-top: 0.7em;" @click ="emits('handleSearchRoute',searchBox)">Search</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>-
  <v-table>
    <thead>
      <tr>
        <th class="text-center">ID</th>
        <th class="text-center">Title</th>
        <th class="text-center">Target</th>
        <th class="text-center">Writer</th>
        <th class="text-center">Image</th>
        <th class="text-center">Create Date</th>
        <th class="text-center"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rolling in data.dtoList" :key="rolling.id">
        <td class="text-center">{{ rolling.id }}</td>
        <td class="text-center">{{ rolling.title }}</td>
        <td class="text-center">{{ rolling.target }}</td>
        <td class="text-center">{{ rolling.writer }}</td>
        <td class="text-center">{{ rolling.imgSrc }}</td>
        <td class="text-center">{{ rolling.createDt }}</td>
<!--        <td><v-btn color="info" @click="emits('handleMoveDetail', rolling.id)">Detail</v-btn></td>-->
      </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination v-model="pageInfo.page" :show-first-last-page="true" :total-visible="pageInfo.size"
                  :length="pageInfo.last" :start="pageInfo.start" @click="clickMovePage()"

                  ></v-pagination>
    <br>
  </div>
</template>

<script setup>
import { ref} from "vue";
import {getRollingSearchList} from "@/apis/rolling/RollingApis";


const data = ref({})
const pageInfo = ref({page : null , size : null , last : null, start : null})
const searchBox = ref({items : ['TITLE','TARGET'],
  searchType : props.pageSearchBox.searchType , searchValue : props.pageSearchBox.searchValue})
const emits = defineEmits(['handleMoveRoute','handleSearchRoute'])
const props = defineProps(['pages','pageSearchBox'])

const clickMovePage = () =>{
  emits('handleMoveRoute',pageInfo.value.page,props.pageSearchBox)

}

const getRollingList = async () => {

  data.value = await getRollingSearchList(props.pages.page,props.pageSearchBox)

  pageInfo.value.size = data.value.size
  pageInfo.value.last = data.value.last
  pageInfo.value.page = data.value.page
  pageInfo.value.start = data.value.start

}


  getRollingList()

</script>

<style scoped>
  .searchBox {
    display: flex;
    width: 25vw;
    float: right;
  }

  .searchTypeBox {
    width: 6vw;
  }

  .searchValueBox {
    width: 12vw;
  }
</style>
