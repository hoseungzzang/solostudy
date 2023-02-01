<template>
  <BaseLayout>
    <div :key="refreshKey">
      <RollingListComponent :pages="pages" :pageSearchBox ="pageSearchBox" @handleMoveRoute = "handleMoveRoute"
      @handleSearchRoute = "handleSearchRoute"></RollingListComponent>
    </div>
  </BaseLayout>
</template>

<script setup>



import RollingListComponent from "@/components/rolling/RollingListComponent.vue";
import {useRoute, useRouter} from "vue-router";
import BaseLayout from "@/layouts/rolling/BaseLayout.vue";
import {ref} from "vue";
const router = useRouter()
const route = useRoute()

const pages = ref({page : route.query.page})
const refreshKey = ref(0)
const pageSearchBox = ref({searchType : route.query.type , searchValue : route.query.keyword})
router.beforeEach((to,from,next)=>{

  pages.value.page = to.query.page
  pageSearchBox.value.searchType = to.query.type
  pageSearchBox.value.searchValue = to.query.keyword

  refreshKey.value++
  next()
})

const handleMoveRoute = (pageNum,searchBox) =>{
  console.log("handleMoveRoute")
  console.log(searchBox)
  pages.value.page = pageNum

  if(searchBox.searchType){
    console.log(pageSearchBox.value)
    router.push({name : "RollingListPage", query :{page : pages.value.page  , type: searchBox.searchType , keyword: searchBox.searchValue} })
  }else{

    router.push({name : "RollingListPage", query :{page : pages.value.page } })
  }

}

const handleSearchRoute = (searchBox) =>{
  console.log("handleSearchRoute")
  console.log(searchBox)
  pages.value.page = 1
    pageSearchBox.value.searchType = searchBox.searchType
    pageSearchBox.value.searchValue = searchBox.searchValue
    router.push({name : "RollingListPage", query :{page : pages.value.page  , type: searchBox.searchType , keyword: searchBox.searchValue} })
}
</script>

<style scoped>

</style>
