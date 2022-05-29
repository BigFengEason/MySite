<template>
  <div class="content">
    <div class="_left">
      <div class="jian"></div>
      <span class="iconfont">&#xe7e5;</span><br /><br /><br />
      <div class="img"></div>
    </div>

    <div class="_right">
      <div class="jian"></div>
      <span class="iconfont">&#xe604;</span><br /><br /><br />
      <div class="img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wechat",
};
</script>

<style scoped>
/* 个人信息右 */
.about > .introduce > .information > .right > .content {
  height: 560px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: on 1.5s linear;
}

.about > .introduce > .information > .right > .content > ._left {
  width: 50%;
  height: 98%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}
.about > .introduce > .information > .right > .content > ._left > .jian {
  position: absolute;
  border: 25px solid red;
  left: 140px;
  top: 90px;
  border-color: transparent transparent white transparent;
}
.about > .introduce > .information > .right > .content > ._left span {
  position: absolute;
  font-size: 50px;
  left: 140px;
  top: 60px;
}

.about > .introduce > .information > .right > .content > ._left > .img {
  width: 300px;
  height: 330px;
  background-image: url("./images/2.jpg");
  background-position: -15px;
  background-size: cover;
  margin-left: 8px;
}
.about > .introduce > .information > .right > .content > ._right {
  width: 50%;
  height: 98%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  position: relative;
}

.about > .introduce > .information > .right > .content > ._right > .jian {
  position: absolute;
  border: 25px solid red;
  left: 125px;
  top: 85px;
  border-color: transparent transparent white transparent;
}

.about > .introduce > .information > .right > .content > ._right span {
  font-size: 50px;
  position: absolute;
  left: 125px;
  top: 53px;
}

.about > .introduce > .information > .right > .content > ._right > .img {
  width: 300px;
  height: 330px;
  background-image: url("./images/3.jpg");
  background-position: -10px;
  background-size: cover;
  margin-left: 3px;
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