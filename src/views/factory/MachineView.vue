<template>
  <CardContainer :title="obj.title"> 보유장비 </CardContainer>
</template>

<script setup>
import CardContainer from '@/components/common/card/CardContainer.vue'
import { useStore } from 'vuex'
import { FACTORY } from '@/data/sidemenu.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const store = useStore()
const obj = ref(null)
store.dispatch('FETCH_SIDEMENU', FACTORY)

obj.value = FACTORY.find((o) => route.name === o.path)
</script>

<style lang="scss" scoped></style>
