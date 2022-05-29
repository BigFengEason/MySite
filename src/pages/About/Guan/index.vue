<template>
  <div class="content">
    <h1>关于网页</h1>
    <div class="img"></div>
    <h2>本网站利用Vue-Cli搭建</h2>
    <h2>利用所学技术应用于实践</h2>
    <h2>加深了学习印象、提升了学习兴趣</h2>
  </div>
</template>

<script>
export default {
  name: "Guan",
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
  text-shadow: 0 0 5px cyan;
}

.about > .introduce > .information > .right > .content > .img {
  width: 500px;
  height: 300px;
  background-image: url(./images/2.jpg);
  background-position: -50px;
  background-size: cover;
}

/* @keyframes on {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>