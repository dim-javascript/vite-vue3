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
        <el-menu
          :router="true"
          :collapse="isCollapse"
          class="custom-menu-cls custom-menu-bg-cls"
          :unique-opened="true"
        >
          <menu-bar-item
            v-for="item in menuList"
            :key="item.path || item.id"
            :index="item.path || item.id"
            :menu-item="item"
            :options="{
              subMenuConfig: {
                'popper-class': 'custom-menu-bg-cls',
              },
            }"
          ></menu-bar-item>
        </el-menu>
      </div>

      <div class="app-body-box__content-box daq-fl daq-fl-column">
        <div class="bread-crumb-custom daq-fl daq-fl-mid"></div>
        <div class="router-content">
          <router-view></router-view>
          <!-- <router-view v-slot="{ Component, route }">
            <div>{{ getMsg(Component) }}</div>
            <component :is="Component"></component>
          </router-view> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menu } from '@/data/index.js';
import MenuBarItem from './components/menu-bar-item.vue';

const isCollapse = ref(false);
const menuList = ref([]);
menuList.value = menu.menuList;

function getMsg(data) {
  console.log('data', data);
}
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
      overflow-x: hidden;
      font-size: 14px;
      &--is-collapse {
        line-height: 60px;
        padding: 0px 20px;
        border-right: solid 1px var(--el-menu-border-color);
        border-bottom: 1px solid var(--el-menu-border-color);
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

// 菜单列表的样式
// star
.custom-menu-cls {
  --custom-menu-width: 180px;

  overflow-x: hidden;
  overflow-y: auto;
  &:not(.el-menu--collapse) {
    width: var(--custom-menu-width);
  }
}
// end
</style>
