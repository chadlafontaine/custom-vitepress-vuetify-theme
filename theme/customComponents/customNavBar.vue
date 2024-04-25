<script setup>
import {useData, useRouter} from "vitepress";

const {
  frontmatter,
  theme,
  site,
  sidebar
} = useData();

const {
  route,
  go
} = useRouter();

</script>

<template>
  <v-app-bar>
    <template #title>
      <span>{{ site.title }}</span>
    </template>
    <template #append>
      <template v-for="menuItem in theme.nav"
                :key="menuItem.text">
        <v-btn v-if="'link' in menuItem"
               @click="go(menuItem.link)">
          {{ menuItem.text }}
        </v-btn>
        <v-menu v-else
                location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props"
                   append-icon="mdi-chevron-down">
              {{ menuItem.text }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="(subMenuItem, index) in menuItem.items"
                :key="index"
                @click="go(subMenuItem.link)">
              <v-list-item-title>{{ subMenuItem.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </template>
  </v-app-bar>
</template>

<style scoped>

</style>