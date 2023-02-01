<template>
  <BaseLayout>
    <div :key="componentKey">
      <RollingListComponent :page="pages.page" @handleMoveAdd="handleMoveAdd" @handleMoveDetail="handleMoveDetail" @handlePageList="handlePageList" @handleChangePage="handleChangePage" @handleSearchList="handleSearchList"></RollingListComponent>
    </div>
  </BaseLayout>
</template>

<script setup>
  import BaseLayout from "@/layouts/rolling/BaseLayout.vue";
  import RollingListComponent from "@/components/rolling/RollingListComponent.vue";
  import {useRoute, useRouter} from "vue-router";
  import {ref} from "vue";

  const componentKey = ref(0);
  const pages = ref({page: 1, size: null})
  const router = useRouter()


  const handleMoveAdd = () => {
    router.push({ name: 'RollingAddPage' })
  }

  const handleMoveDetail = ( id ) => {
    router.push({ name: 'RollingDetailPage', params: { id: id }, query: { page: pages.value.page } })
  }

  const handlePageList = (page) => {
    router.push({ name: 'RollingListPage', query: { page: page } })
  }

  const handleChangePage = ( page, size ) => {
    pages.value.page = page
    pages.value.size = size
    handlePageList(page)
  }

  const handleSearchList = ( search ) => {
    router.push({name: 'RollingListPage', query: { type: search.searchType, keyword: search.searchValue }})
  }

  router.beforeEach((to, from, next) => {
    // if (!to.query.page) {
    //   pages.value.page = pages.value.page
    //   next()
    //   return
    // }
    pages.value.page = to.query.page
    componentKey.value++
    next()
  })
</script>

<style scoped>

</style>
