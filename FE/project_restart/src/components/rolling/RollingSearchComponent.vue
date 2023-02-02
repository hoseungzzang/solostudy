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
</template>

<script setup>
import {ref} from "vue";

const searchBox = ref({items : ['TITLE','TARGET'],
  searchType : props.pageSearchBox.searchType , searchValue : props.pageSearchBox.searchValue})
const emits = defineEmits(['handleSearchRoute'])
const props = defineProps(['pages','pageSearchBox'])
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
