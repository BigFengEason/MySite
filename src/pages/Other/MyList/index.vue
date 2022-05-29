<template>
  <ul class="todoMain">
    <MyItem
      v-for="todoObj in todoObj"
      :key="todoObj.id"
      :todo="todoObj"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from "@/pages/Other/MyItem";
import { mapState } from "vuex";
export default {
  name: "MyList",
  components: { MyItem },
  computed: {
    //使用计算属性是因为vuex中值变化会重新渲染模板,data只会在初次挂载赋值，不会更新渲染页面
    ...mapState(["todoObj"]),
  },
};
</script>

<style scoped>
/* todolist内容样式 */
.other > .outer > .todoContainer > .todoMain {
  width: 95%;
  margin-top: 5px;
  border-radius: 8px;
  border: 1px solid;
  overflow: hidden;
}
</style>