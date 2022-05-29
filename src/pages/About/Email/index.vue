<template>
  <div class="content">
    <div class="img"></div>
    <h1>
      <span class="iconfont">&#xe908;</span>&nbsp;&nbsp;E-mail:1052494198@qq.com
    </h1>
  </div>
</template>

<script>
export default {
  name: "Email",
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
  color: navajowhite;
  text-shadow: 0 0 5px slategrey;
}

.about > .introduce > .information > .right > .content > .img {
  width: 450px;
  height: 300px;
  background-image: url(./images/1.jpg);
  background-size: cover;
}

.about > .introduce > .information > .right > .content span {
  font-size: 25px;
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