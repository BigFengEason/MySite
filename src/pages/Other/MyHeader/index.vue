<template>
  <div class="todoHeader">
    <input
      type="text"
      placeholder=" 请输入你的任务名称，按回车确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  methods: {
    add(e) {
      if (!e.target.value.trim()) return alert("输入不能为空");
      // 将用户包装成一个todo对象
      const todoObj = { id: nanoid(), name: e.target.value, done: false };
      // 给store的state添加一个新todoObj对象
      this.$store.dispatch("addobj", todoObj);
      // 清空输入
      e.target.value = "";
    },
  },
};
</script>

<style scoped>
/* todolist头部样式 */
.other > .outer > .todoContainer > .todoHeader {
  width: 95%;
  height: 45px;
  margin-top: 5px;
}

.other > .outer > .todoContainer > .todoHeader input {
  margin-top: 3px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.6);
  border: 1px solid;
  font-size: 16px;
  width: 100%;
  height: 35px;
}

.other > .outer > .todoContainer > .todoHeader input:focus {
  outline: none;
  border: 1px solid rgba(82, 168, 236, 0.8);
  box-shadow: 0px 0px 8px rgba(82, 168, 236, 0.6);
}
</style>