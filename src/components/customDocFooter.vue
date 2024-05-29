<script setup lang="ts">
import {computed} from 'vue'
import {useData, useRouter} from "vitepress"
import {usePrevNext} from 'vitepress/dist/client/theme-default/composables/prev-next.js'

const {theme, page, frontmatter} = useData()

const control = usePrevNext()

const hasEditLink = computed(() => {
  return theme.value.editLink && frontmatter.value.editLink !== false
})
const hasLastUpdated = computed(() => {
  return page.value.lastUpdated && frontmatter.value.lastUpdated !== false
})
const showFooter = computed(() => {
  return hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
})
const {
  go
} = useRouter();

</script>

<template>
  <v-footer v-if="showFooter" class="mt-16">
    <v-sheet width="100%">
      <v-divider></v-divider>
      <div>
        <v-container>
          <v-row>
            <v-col>
              <v-card v-if="control.prev?.link"
                      elevation="12"
                      :title="control.prev.text"
                      subtitle="Previous page"
                      @click="go(control.prev.link)">
              </v-card>
            </v-col>
            <v-col>
              <v-card v-if="control.next?.link"
                      elevation="12"
                      :title="control.next.text"
                      subtitle="Next page"
                      @click="go(control.next.link)">
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-sheet>
  </v-footer>
</template>

<style scoped>
</style>