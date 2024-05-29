<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>

<template>
  <v-app>
    <Layout>
      <template #aside-outline-before>
        My custom sidebar top content
      </template>
    </Layout>
  </v-app>
</template>

<style scoped>

</style>