<template>
  <div class="app-example-one">事例页面1</div>
</template>

<script setup>
import { getUrlParams } from '@/utils/common.js';
// getUrlParams('http://example.com/search?query=%40');
console.log(
  'getUrlParams',
  getUrlParams('http://example.com/search?query=%40&a=&b=')
);
</script>

<style lang="scss" scoped>
.app-example-one {
}
</style>
