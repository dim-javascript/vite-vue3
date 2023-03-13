<template>
  <div class="app-not-fount">
    <p class="p-1">404</p>
    <p class="p-2">Not</p>
    <p class="p-3">Found</p>
    <p class="p-4" @animationend="animationEnd">当前页面未找到</p>

    <p class="auto-home">{{ t }}秒后自动回到首页</p>
    <div class="tips-wrap app-fl app-fl-center app-fl-mid">
      <div class="tips-cont" @click="backHome">点击返回首页</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import config from '@/config';

// 获取环境变量
const BASE = config.base;

const router = useRouter();

const t = ref(3);

let timer = null;

// 动画执行完成
function animationEnd() {
  timer = setInterval(() => {
    t.value--;
    if (t.value < 1) {
      backHome();
    }
  }, 1000);
}

// 返回到首页
function backHome() {
  clearInterval(timer);
  router.replace({ path: `${BASE ? BASE : '/'}` });
}
</script>

<style lang="scss" scoped>
.app-not-fount {
  width: 100%;
  min-height: 100%;
  padding: 140px;
  background-color: var(--el-color-primary);
  color: #fff;
  p {
    font-size: 68px;
    font-weight: bold;
    overflow: hidden;
  }
  .p-1 {
    width: 0px;
    animation: p1 0.5s steps(3) forwards;
  }
  .p-2 {
    width: 0px;
    animation: p2 0.5s steps(3) 0.5s forwards;
  }
  .p-3 {
    position: relative;
    width: 0px;
    animation: p3 1s steps(5) 1s forwards;
  }
  .p-4 {
    opacity: 0;
    animation: delayShow 0.5s linear 2s forwards;
  }

  .auto-home {
    margin-top: 40px;
    font-size: 20px;
    font-weight: normal;
    opacity: 0;
    animation: delayShow 0.5s linear 2s forwards;
  }

  // 提示页面
  .tips-wrap {
    margin-top: 130px;
    .tips-cont {
      padding: 20px 30px;
      border-radius: 15px;
      border: 1px solid #fff;
      font-size: 26px;
      opacity: 0;
      cursor: pointer;
      animation: delayShow 0.5s linear 2s forwards;
    }
  }
}

// 动画打字机效果
@keyframes p1 {
  0% {
    width: 0px;
  }
  100% {
    width: 114px;
  }
}

@keyframes p2 {
  0% {
    width: 0px;
  }
  100% {
    width: 135px;
  }
}

@keyframes p3 {
  0% {
    width: 0px;
  }
  100% {
    width: 205px;
  }
}

@keyframes delayShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
