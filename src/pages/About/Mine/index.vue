<template>
  <div class="content">
    <div class="img"></div>
    <h1>所谓觉悟，就是在漆黑的荒野上开辟出一条理当前进的光明大道。</h1>
  </div>
</template>

<script>
export default {
  name: "Mine",
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
  text-indent: 4em;
  color: rgb(135, 235, 233);
  text-shadow: 0 0 5px rgb(114, 211, 250);
}

.about > .introduce > .information > .right > .content > .img {
  width: 450px;
  height: 300px;
  background-image: url(./images/1.jpg);
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