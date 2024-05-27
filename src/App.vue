<script setup>
import {RouterView} from 'vue-router'

</script>
<template>
  <div>
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
</template>

<style>
</style>
