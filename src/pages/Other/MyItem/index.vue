<template>
  <li>
    <input
      type="checkbox"
      :checked="todo.done"
      @change="handle(todo.id)"
    />&nbsp;&nbsp;<span>{{ todo.name }}</span
    ><button @click="deleteObj(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接受todo对象
  props: ["todo"],
  methods: {
    // 设置勾选状态改变时的方法
    handle(id) {
      // 控制store的status，将对应todo对象的done值取反
      this.$store.dispatch("chgobj", id);
    },
    // 点击按钮删除todoObj
    deleteObj(id) {
      if (confirm("确认删除该事件？")) {
        this.$store.dispatch("dltobj", id);
      }
    },
  },
};
</script>

<style scoped>
.other > .outer > .todoContainer > .todoMain li {
  width: 100%;
  height: 35px;
  font-weight: 500;
  border-bottom: 1px solid;
}

.other > .outer > .todoContainer > .todoMain li:last-child {
  border-bottom: none;
}

.other > .outer > .todoContainer > .todoMain li > input[type="checkbox"] {
  margin-top: 8px;
  margin-left: 5px;
  width: 18px;
  height: 18px;
}

.other > .outer > .todoContainer > .todoMain li span {
  font-size: 16px;
}

.other > .outer > .todoContainer > .todoMain li button {
  float: right;
  width: 40px;
  height: 30px;
  margin-top: 3px;
  margin-right: 8px;
  background-color: #db4f47;
  color: aliceblue;
  border: 1px solid #be362d;
  border-radius: 3px;
  display: none;
}

.other > .outer > .todoContainer > .todoMain li button:hover {
  cursor: pointer;
  background-color: #be362d;
}

.other > .outer > .todoContainer > .todoMain li:hover {
  background-color: rgba(221, 221, 221, 0.8);
}

.other > .outer > .todoContainer > .todoMain li:hover button {
  display: block;
}
</style>