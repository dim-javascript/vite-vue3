<template>
  <div>
    <!-- 递归 -->
    <el-sub-menu
      v-bind="options.subMenuConfig || {}"
      v-if="menuItem.children && menuItem.children.length > 0"
      :index="menuItem[indexKey] || menuItem.id"
    >
      <template #title>
        <template v-if="menuItem.icon">
          <el-icon :size="22">
            <component :is="menuItem.icon"></component>
          </el-icon>
        </template>
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
      <template v-if="menuItem.icon">
        <el-icon :size="22">
          <component :is="menuItem.icon"></component>
        </el-icon>
      </template>
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
    // 适配 element-plus 中的属性
    options: {
      type: Object,
      default: () => {
        return {
          subMenuConfig: {},
        };
      },
    },
  },
});
</script>
