<template>
  <div class="app-home-index">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.pass" type="text" autocomplete="off" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { elValidator } from '@/utils/custom-el-validator.js';

const ruleFormRef = ref(null);
const ruleForm = reactive({
  pass: '',
});
const rules = reactive({
  pass: [
    {
      validator: (rule, value, callback) => {
        elValidator({
          type: 'veePsdDeep',
          value,
          callback,
          errorName: '名称',
        });
      },
      trigger: 'blur',
    },
  ],
});
</script>

<style scoped lang="scss">
.app-home-index {
}
</style>
