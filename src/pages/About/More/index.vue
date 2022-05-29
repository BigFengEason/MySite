<template>
  <div class="content">
    <div class="img"></div>
    <h1>
      自己选择了方向与路途时，就不要抱怨，一个人只有承担起狂风暴雨，才能最终守得住彩虹满天。
    </h1>
  </div>
</template>

<script>
export default {
  name: "More",
};
</script>

<style scoped>
/* 个人信息右 */
.about > .introduce > .information > .right > .content {
  text-indent: 4em;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: on 1.5s linear;
  color: rgb(255, 255, 255);
  text-shadow: 0 0 5px whitesmoke;
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