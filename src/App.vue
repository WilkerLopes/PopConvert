<script setup>
import Page from './page/index.vue'
import HeaderStore from './components/layout/HeaderStore.vue'
import FooterStore from './components/layout/FooterStore.vue'
</script>

<template>
  <HeaderStore />
  <main>
    <Page />
  </main>
  <FooterStore />
</template>

<style scoped>
main {
  padding-top: 100px;
  overflow-x: hidden;
}
</style>
