<template>
  <div class="app-login-page app-fl app-fl-column">
    <div class="app-login-header"></div>
    <div class="app-login-body app-fl app-fl-mid">
      <div class="login-box__cloud">
        <div ref="cloudRef" class="cloud-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import TagCloud from '@/utils/tag-cloud.js';

// 模拟数据
import { login } from '@/data/index.js';

const loginData = login.tagCloudList;

// 词云的 dom
const cloudRef = ref(null);
onMounted(() => {
  const { width } = cloudRef.value.getBoundingClientRect();
  TagCloud(cloudRef.value, loginData, {
    radius: width / 2,
    key: 'id',
    initSpeed: 'slow',
    maxSpeed: 'normal',
  });
});
</script>

<style lang="scss" scoped>
.app-login {
  &-page {
    background-image: linear-gradient(0deg, #f6fbff, #409eff);
    height: 100%;
    width: 100%;
  }
  &-body {
    flex: 1;
    .login-box__cloud {
      width: 400px;
      height: 400px;
      .cloud-wrap {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
