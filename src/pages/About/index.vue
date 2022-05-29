<template>
  <!-- 关于 -->
  <div class="about">
    <div class="aboutimg clearfix">
      <h1>About Me</h1>
    </div>
    <div class="introduce">
      <div class="information">
        <div class="left">
          <a to="/about/mine">
            <div></div>
            <p>FENG ZHIRUI&nbsp;<span class="iconfont">&#xe600;</span></p>
          </a>
          <router-link to="/about/index" active-class="active"
            ><span class="iconfont">&#xe67b;</span>&nbsp;&nbsp;首页</router-link
          >
          <router-link to="/about/guan" active-class="active"
            ><span class="iconfont">&#xe60b;</span>&nbsp;&nbsp;关于</router-link
          >
          <router-link to="/about/phone" active-class="active"
            ><span class="iconfont">&#xe61c;</span>&nbsp;&nbsp;电话</router-link
          >
          <router-link to="/about/email" active-class="active"
            ><span class="iconfont">&#xe908;</span>&nbsp;&nbsp;邮箱</router-link
          >
          <router-link to="/about/wechat" active-class="active"
            ><span class="iconfont">&#xe7e5;</span>&nbsp;&nbsp;微信</router-link
          >
          <router-link to="/about/more" active-class="active"
            ><span class="iconfont">&#xe62f;</span>&nbsp;&nbsp;更多</router-link
          >
        </div>
        <div class="right">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
/* 关于样式 */
.about {
  width: 100vw;
  height: 140vh;
}

.about > .aboutimg {
  height: 250px;
  background-image: url(./images/about1.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: -100px -240px;
  animation: load 1s linear;
}

.about > .aboutimg > h1 {
  text-align: center;
  margin-top: 80px;
  font-size: 7.5em;
  color: rgba(74, 214, 238, 0.6);
  text-shadow: 3px 3px 7px rgb(3, 131, 163);
}

/* 主体样式 */
.about > .introduce {
  opacity: 0.9;
  width: 100%;
  height: 125vh;
  background-image: url(./images/about2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

/* 个人信息部分样式 */
.about > .introduce > .information {
  width: 1000px;
  height: 560px;
  margin-top: 90px;
  background-color: rgba(78, 162, 200, 0.2);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  animation: display 3s linear;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgba(102, 142, 174, 0.8);
}

/* 个人信息左 */
.about > .introduce > .information > .left {
  background-color: rgba(150, 167, 176, 0.35);
  width: 350px;
  height: 560px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(5px);
}

.about > .introduce > .information > .left > a {
  width: 100%;
  height: 66px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  color: #476e99;
}

.about > .introduce > .information > .left > a:hover {
  color: black;
  background-color: rgba(56, 206, 244, 0.2);
  box-shadow: 0 0 10px rgb(10, 186, 230);
}

.about > .introduce > .information > .left > a img {
  width: 25px;
}

.about > .introduce > .information > .left > a span {
  font-size: 27px;
}

/* 个人信息右 */
.about > .introduce > .information > .right {
  background-color: rgba(150, 167, 176, 0.35);
  width: 630px;
  height: 560px;
  border-radius: 20px;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* text-indent: 4em; */
  /* animation: on 1.5s linear; */
  backdrop-filter: blur(5px);
}

/* iconfont样式 */
.about > .introduce > .information > .left > a:nth-child(1) span {
  color: rgb(159, 103, 35);
}

.about > .introduce > .information > .left > a:nth-child(2) span {
  color: rgb(20, 180, 244);
}

.about > .introduce > .information > .left > a:nth-child(3) span {
  color: darkorange;
}

.about > .introduce > .information > .left > a:nth-child(4) span {
  color: aqua;
}

.about > .introduce > .information > .left > a:nth-child(5) span {
  color: red;
}

.about > .introduce > .information > .left > a:nth-child(6) span {
  color: green;
}

.about > .introduce > .information > .left > a:nth-child(7) span {
  color: dodgerblue;
}

.about > .introduce > .information > .left > a:first-child {
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.about > .introduce > .information > .left > a:first-child > p {
  font-weight: bold;
  font-size: 20px;
}

.about > .introduce > .information > .left > a:first-child > div {
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-top: 10px;
  background-image: url(./images/about4.jpg);
  background-size: cover;
}

.active {
  color: black !important;
  background-color: rgba(186, 212, 234, 0.7) !important;
}

/* 刷新动画 */
@keyframes load {
  0% {
    height: 0;
  }

  60% {
    height: 250px;
  }

  70% {
    height: 260px;
  }

  80% {
    height: 250px;
  }

  90% {
    height: 240px;
  }

  100% {
    height: 250px;
  }
}

@keyframes display {
  0% {
    opacity: 0;
  }
  45% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
  }
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