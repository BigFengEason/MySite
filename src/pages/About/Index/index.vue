<template>
  <div class="content">
    <div class="img"></div>
    <h1>姓名：FENG ZHIRUI&nbsp;<span class="iconfont">&#xe600;</span></h1>
    <h1>学校：西安工业大学</h1>
    <h1>专业：智能制造工程</h1>
    <h1>年级：大二</h1>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style scoped>
/* 个人信息右 */
.about > .introduce > .information > .right > .content {
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: on 1.5s linear;

  color: rgb(223, 215, 223);
  text-shadow: 0 0 5px rgb(71, 241, 134);
}

.about > .introduce > .information > .right > .content > .img {
  width: 500px;
  height: 300px;
  background-position: -15px;
  background-image: url(./images/2.jpg);
  background-size: cover;
}

.about > .introduce > .information > .right > .content > span {
  font-size: 25px;
  color: rgb(148, 91, 22);
}

@keyframes on {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>