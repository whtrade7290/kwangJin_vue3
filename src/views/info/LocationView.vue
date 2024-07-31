<template>
  <CardContainer :title="obj.title"> 지도 </CardContainer>
</template>

<script setup>
import CardContainer from '@/components/common/card/CardContainer.vue'
import { useStore } from 'vuex'
import { INFO } from '@/data/sidemenu.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

console.log(INFO)

const route = useRoute()
const store = useStore()
const obj = ref(null)
store.dispatch('FETCH_SIDEMENU', INFO)

console.log('store.state.sidemenu: ', store.state.sidemenu)
obj.value = INFO.find((o) => route.name === o.path)
</script>

<style lang="scss" scoped></style>
