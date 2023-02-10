<template>
  <div>
    <!-- 递归 -->
    <el-sub-menu
      v-if="menuItem.children && menuItem.children.length > 0"
      :index="menuItem[indexKey] || menuItem.id"
    >
      <template #title>
        <span>{{ menuItem.name }}</span>
      </template>

      <menu-bar-item
        v-for="item in menuItem.children"
        :key="item[indexKey] || item.id"
        :index="item[indexKey] || item.id"
        :menu-item="item"
      >
      </menu-bar-item>
    </el-sub-menu>

    <!-- 菜单项目 -->
    <el-menu-item v-else :index="menuItem[indexKey] || menuItem.id">
      <template #title>
        <span>{{ menuItem.name }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MenuBarItem',
  props: {
    menuItem: {
      type: Object,
      default: () => ({}),
    },
    // 唯一标志的key
    indexKey: {
      type: String,
      default: 'path',
    },
  },
});
</script>
