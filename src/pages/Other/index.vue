<template>
  <div class="other">
    <div class="outer">
      <div class="todoContainer">
        <h1>TODO LIST</h1>
        <MyHeader></MyHeader>
        <MyList></MyList>
        <MyFooter></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/pages/Other/MyHeader";
import MyList from "@/pages/Other/MyList";
import MyFooter from "@/pages/Other/MyFooter";
export default {
  name: "Other",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
};
</script>

<style scoped>
.other {
  width: 100vw;
  height: 130vh;
}
.other > .outer {
  width: 100vw;
  height: calc(130vh + 115px);
  background-image: url("./images/1.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  animation: load 0.5s linear;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}
/* todolist样式 */

.other > .outer > .todoContainer {
  width: 700px;
  margin-top: 150px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: load2 1s linear;
  box-shadow: 0 0 20px rgba(229, 218, 219, 0.7);
  backdrop-filter: blur(3px);
}

@keyframes load {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load2 {
  0% {
    opacity: 0;
    transform: translateX(-200px);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
  }
}
</style>