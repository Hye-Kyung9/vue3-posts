<template>
  <div>
    {{ $route.path }}
    <h2>about view</h2>
    <button class="btn btn-primary" @click="$router.push('/')">HOME으로 이동</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.path);
</script>

<style lang="scss" scoped></style>
