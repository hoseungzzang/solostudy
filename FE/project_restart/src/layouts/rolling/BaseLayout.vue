<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>
        <v-btn v-for="menu in menus" :key="menu.name" variant="text" :to="{name: menu.name}">
          {{ menu.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field density="compact" hide-details variant="solo"></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <slot></slot>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import {ref} from "vue";

  const menus = ref([
    {name: 'RollingListPage', title: 'LIST'},
    {name: 'LoginPage', title: 'LOGIN'},
    {name: 'LogoutPage', title: 'LOGOUT'},
  ])
</script>

<style scoped>

</style>
