<template>
  <div class="todoFooter" v-show="$store.state.todoObj.length != 0">
    <input
      type="checkbox"
      :checked="isAll"
      @change="checkAll"
    />&nbsp;&nbsp;&nbsp;&nbsp;
    <span>已完成{{ sum }}/全部{{ $store.state.todoObj.length }}</span>
    <button @click="deleteAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  computed: {
    sum() {
      let s = 0;
      this.$store.state.todoObj.forEach((element) => {
        if (element.done) s++;
      });
      return s;
    },
    isAll() {
      return (
        this.sum === this.$store.state.todoObj.length &&
        this.$store.state.todoObj.length > 0
      );
    },
  },
  methods: {
    checkAll(e) {
      //改变全部勾选状态
      this.$store.dispatch("chcall", e.target.checked);
    },
    deleteAll() {
      if (confirm("确认清除已完成？")) {
        this.$store.commit("DLTSUC");
      }
    },
  },
};
</script>

<style scoped>
/* todolist底部样式 */
.other > .outer > .todoContainer > .todoFooter {
  width: 95%;
  height: 50px;
  line-height: 50px;
  margin: 5px 0px;
  /* border: 1px solid; */
  border-radius: 15px;
}

.other > .outer > .todoContainer > .todoFooter input[type="checkbox"] {
  margin-top: 17px;
  margin-left: 10px;
  width: 18px;
  height: 18px;
}

.other > .outer > .todoContainer > .todoFooter span {
  font-size: 16px;
  font-weight: bold;
}

.other > .outer > .todoContainer > .todoFooter button {
  float: right;
  font-size: 14px;
  background-color: #db4f47;
  color: aliceblue;
  border: 1px solid #be362d;
  border-radius: 5px;
  margin-top: 8px;
  margin-right: 10px;
  width: 130px;
  height: 35px;
}

.other > .outer > .todoContainer > .todoFooter button:hover {
  background-color: #be362d;
  cursor: pointer;
}
</style>