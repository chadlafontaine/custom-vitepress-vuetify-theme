<script setup lang="ts">

import {onBeforeMount, ref} from "vue";
import {useSidebar} from "vitepress/theme";
import {useRouter} from "vitepress";

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
  hasSidebar,
  sidebarGroups
} = useSidebar();

const {
  go
} = useRouter();

const open = ref([]);

onBeforeMount(() => {
  const sideBarList = sidebarGroups.value;

  sideBarList.forEach((item) => {
    if (!item.collapsed) {
      open.value.push(`${item.text}`)
    }
  })
});

</script>

<template>
  <v-navigation-drawer absolute
                       permanent
                       v-model="hasSidebar">
    <v-list nav density="compact"
            v-for="(mainItem, mainIndex) in sidebarGroups"
            :key="mainIndex"
            v-model:opened="open">
      <v-list-group :value="`${mainItem.text}`">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              :title="mainItem.text"
          ></v-list-item>
        </template>
        <v-list-item
            v-for="(subItem, subIndex) in mainItem.items"
            :key="subIndex"
            :title="subItem.text"
            :value="subItem"
            color="primary"
            rounded="xl"
            variant="elevated"
            base-color="secondary"
            @click="go(subItem.link)"
            elevation="5">
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>