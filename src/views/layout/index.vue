<template>
  <div class="app-layout-index">
    <div class="app-header-box"></div>

    <div class="app-body-box daq-fl">
      <div class="app-body-box__sidebar-box">
        <div class="app-body-box__sidebar-box--is-collapse">
          <!-- 收缩/展开 -->
          <el-icon
            :class="['is-collapse-icon', isCollapse && 'icon-rotate']"
            @click="isCollapse = !isCollapse"
          >
            <Fold></Fold>
          </el-icon>
        </div>
      </div>

      <div class="app-body-box__content-box daq-fl daq-fl-column">
        <div class="bread-crumb-custom daq-fl daq-fl-mid"></div>
        <div class="router-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menu } from '@/data/index.js';

console.log('menu', menu);

const isCollapse = ref(true);
</script>

<style lang="scss" scoped>
.app {
  &-layout-index {
    height: 100%;
    width: 100%;
  }
  &-header-box {
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
  &-body-box {
    height: calc(100vh - 60px);
    width: 100%;
    &__sidebar-box {
      display: grid;
      grid-template-rows: 50px 1fr;
      border-right: solid 1px var(--el-menu-border-color);
      overflow-x: hidden;
      font-size: 14px;
      &--is-collapse {
        line-height: 60px;
        padding: 0px 20px;
        border-bottom: 1px solid #e1e5ef;
        .is-collapse-icon {
          font-size: 18px;
          cursor: pointer;
          transform: rotate(0deg);
          transition: transform 0.4s;
          &.icon-rotate {
            transform: rotate(180deg);
          }
        }
      }
    }

    &__content-box {
      flex: 1;
      display: grid;
      grid-template-rows: 50px 1fr;
      overflow: hidden;
      .bread-crumb-custom {
        padding: 0 20px;
        border-bottom: 1px solid #e1e5ef;
        font-size: 14px;
        color: #999;

        .describe {
          &-icon {
            font-size: 16px;
            color: #b3b6bd;
          }
        }
      }

      .router-content {
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }
}
</style>
