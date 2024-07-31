<template>
  <CardContainer :title="obj.title"> 문의하기 </CardContainer>
</template>

<script setup>
import CardContainer from '@/components/common/card/CardContainer.vue'
import { useStore } from 'vuex'
import { CONTACT } from '@/data/sidemenu.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const store = useStore()
const obj = ref(null)
store.dispatch('FETCH_SIDEMENU', CONTACT)

obj.value = CONTACT.find((o) => route.name === o.path)
</script>

<style lang="scss" scoped></style>
