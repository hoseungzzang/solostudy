<template>
  <BaseLayout>
    <div :key="componentKey">
      <RollingListComponent :search="searchBox" :page="pages.page" @handleMoveAdd="handleMoveAdd" @handleMoveDetail="handleMoveDetail" @handleChangePage="handleChangePage" @handleSearchList="handleSearchList" @getQueryLenth="getQueryLenth"></RollingListComponent>
    </div>
  </BaseLayout>
</template>

<script setup>
  import BaseLayout from "@/layouts/rolling/BaseLayout.vue";
  import RollingListComponent from "@/components/rolling/RollingListComponent.vue";
  import {useRoute, useRouter} from "vue-router";
  import {computed, ref, watch} from "vue";

  const route = useRoute()
  const router = useRouter()
  const componentKey = ref(0);
  const pages = ref({page: route.query.page, size: null})
  const searchBox = ref({searchType: route.query.type, searchValue: route.query.keyword})



  const handleMoveAdd = () => {
    router.push({ name: 'RollingAddPage' })
  }

  const handleMoveDetail = ( id ) => {
    router.push({ name: 'RollingDetailPage', params: { id: id }, query: { page: pages.value.page } })
  }

  const handleChangePage = ( page ) => {
    pages.value.page = page.pageNum
    pages.value.size = page.pageSize
    if ( route.query.type !== undefined ) {
      router.push({ name: 'RollingListPage', query: { page: page.pageNum, type: route.query.type, keyword: route.query.keyword } })
      return
    }
    router.push({ name: 'RollingListPage', query: { page: page.pageNum } })
  }

  const handleSearchList = ( search, page ) => {

    searchBox.value.searchType = search.searchType
    searchBox.value.searchValue = search.searchValue

    //console.log("handleSearchList" , search, page)

    //componentKey.value++

    router.push({name: 'RollingListPage', query: { searchType: search.searchType, searchValue: search.searchValue, page:page}})



  }

  const getQueryLenth = () => {
    const t = Object.keys(route.query).length
    return t
  }

  router.beforeEach((to, from, next) => {

    console.log("-------------------page----------------")
    console.log(to.query)
    console.log("-------------------page----------------")


    searchBox.value = to.query
    pages.value.page = to.query.page



    componentKey.value++
    next()
  })
</script>

<style scoped>

</style>
