<template>
  <v-row>
    <v-col cols="12">
      <v-btn class="ma-4" color="success" @click="emits('handleMoveAdd')">ADD</v-btn>
      <v-form class="ma-4 searchBox">
        <v-combobox class="searchTypeBox" label="Type" v-model="searchBox.searchType" :items="searchBox.item"
                    variant="underlined"></v-combobox>
        <v-text-field class="searchValueBox" v-model="searchBox.searchValue" label="Keyword" variant="underlined"
                      required></v-text-field>
        <v-btn @click="emits('handleSearchList', searchBox)" variant="text" style="margin-top: 0.7em;">Search</v-btn>
      </v-form>
    </v-col>
  </v-row>
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
        <td><v-btn color="info" @click="emits('handleMoveDetail', rolling.id)">Detail</v-btn></td>
      </tr>
    </tbody>
  </v-table>

  <div class="text-center">
    <v-pagination v-model="pageInfo.pageNum" :show-first-last-page="true" :total-visible="pageInfo.pageSize"
                  :length="pageInfo.length" :start="pageInfo.start"
                  @click="() => emits('handleChangePage', pageInfo.pageNum, pageInfo.pageSize)"></v-pagination>
    <br>
  </div>
</template>

<script setup>
  import {getRollingList} from "@/apis/rolling/RollingApis";
  import {onMounted, ref} from "vue";
  import {useRoute} from "vue-router";


  const props = defineProps(['page'])
  const emits = defineEmits(['handleMoveAdd', 'handleMoveDetail', 'handlePageList', 'handleChangePage', 'handleSearchList'])
  const data = ref({})
  const pageInfo = ref({pageNum: 1, pageSize: 10, length: 10, start: 1})
  const searchBox = ref({item: ['ALL', 'Title', 'Target'], searchType: 'ALL', searchValue: ''})
  const route =useRoute()


  const getRollings = async () => {
    data.value = await getRollingList( route.query )
    pageInfo.value.pageNum = data.value.page
    pageInfo.value.pageSize = data.value.size
    pageInfo.value.length = data.value.last
  }

  onMounted(() => {
    getRollings()
  })
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
