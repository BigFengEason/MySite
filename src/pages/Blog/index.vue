<template>
  <!-- BLOG博客 -->
  <div class="blog">
    <div class="outer">
      <div class="left">
        <div class="content">
          <img src="./images/blog1.jpg" />
          <div class="technology">
            <h1>HTML+CSS&nbsp;&nbsp;<span class="iconfont">&#xe87d;</span></h1>
            <h3>
              大一学习c语言后,深深爱上了编程~~直到偶然接触了HTML,CSS,让我认识了网页，了解了前端...
            </h3>
            <h3>从此，我便在前端之路越走越远</h3>
          </div>
        </div>
        <div class="content">
          <img src="./images/blog2.jpg" />
          <div class="technology">
            <h1>Node.js&nbsp;&nbsp;<span class="iconfont">&#xec12;</span></h1>
            <h3>
              在熟悉了HTML、CSS、JavaScript、ajax后，我深深的体会到了前后端结合的重要性，为了了解后端，我选择学习了前端更易学的Node.js
            </h3>
          </div>
        </div>
        <div class="content">
          <img src="./images/blog3.jpg" />
          <div class="technology">
            <h1>Vue.js&nbsp;&nbsp;<span class="iconfont">&#xe69a;</span></h1>
            <h3>
              了解到前端工程化的重要性，我目前正在学习Vue，因为目前Vue是国内最火的前端框架
            </h3>
            <h3>
              同样，此网站的搭建也简单用到了Vue-Router、VueX等插件，实现了路由组件间的切换、数据集中式管理等...
            </h3>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="main">
          <br /><br />
          <div class="mine"></div>
          <div class="introduction">
            <h1>FENG ZHIRUI <span class="iconfont">&#xe600;</span></h1>
            <p>西安工业大学</p>
            <p>智能制造工程</p>
            <p><span class="iconfont">&#xe6e0;</span>生命不息，学习不止！</p>
            <p>前端~从入门到入坟..<span class="iconfont">&#xe603;</span></p>
          </div>
        </div>
        <div class="tag">
          <h1>TAG</h1>
          <p>
            C &nbsp;html、css、JavaScript <br />
            ES6 &nbsp;Promise &nbsp;ajax、axios <br />
            Node.js &nbsp; webpack &nbsp; Vue.js
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped>
.blog {
  width: 100vw;
  height: 120vh;
}

/* 外层容器 */
.blog > .outer {
  width: 100%;
  height: calc(120vh + 115px);
  background-image: url(./images/background.jpg);
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: load5 0.5s linear;
}

/* 左侧容器 */
.blog > .outer > .left {
  width: 750px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #a6c6eb;
}

.blog > .outer > .left span {
  font-size: 40px;
}

.blog > .outer > .left > .content {
  width: 680px;
  height: 190px;
  border-radius: 30px;
  background-color: rgba(27, 121, 164, 0.15);
  backdrop-filter: blur(5px);
  box-shadow: 0 0 20px rgb(74, 107, 118);
  display: flex;
  flex-wrap: wrap;
}

.blog > .outer > .left > .content:nth-child(1) {
  animation: load1 0.75s linear;
}

.blog > .outer > .left > .content:nth-child(2) {
  animation: load2 1.5s linear;
}

.blog > .outer > .left > .content:nth-child(3) {
  animation: load3 2.25s linear;
}

.blog > .outer > .left > .content img {
  border-radius: 30px;
  width: 230px;
  height: 190px;
}

.blog > .outer > .left > .content > .technology {
  width: 450px;
  height: 190px;
  display: flex;
  flex-direction: column;
  line-height: 25px;
}

.blog > .outer > .left > .content > .technology h1 {
  text-align: center;
  line-height: 60px;
  height: 60px;
  font-size: 25px;
}

.blog > .outer > .left > .content > .technology h3 {
  font-size: 14px;
  text-indent: 2em;
}

/* 右侧容器 */
.blog > .outer > .right {
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  animation: load4 3s linear;
}

.blog > .outer > .right span {
  font-size: 25px;
  color: rgb(159, 103, 35);
}

.blog > .outer > .right p > span {
  color: red;
}

.blog > .outer > .right > .main {
  width: 300px;
  height: 380px;
  background-color: rgba(244, 244, 243, 0.4);
  border-radius: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(255, 255, 211, 0.5);
}

.blog > .outer > .right > .main > .mine {
  width: 130px;
  height: 130px;
  box-shadow: 0 0 15px #25d8fc;
  background-image: url(./images/about4.jpg);
  background-size: cover;
  border-radius: 65px;
  transition: all 0.3s linear;
}

.blog > .outer > .right > .main > .mine:hover {
  transform: scale(1.1, 1.1);
}

.blog > .outer > .right > .main > .introduction {
  display: flex;
  width: 300px;
  height: 150px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 15px;
}

.blog > .outer > .right > .tag {
  width: 300px;
  height: 200px;
  background-color: rgba(253, 253, 250, 0.4);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  line-height: 30px;
  justify-content: space-evenly;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 10px rgba(252, 252, 194, 0.5);
}

@keyframes load1 {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }

  50% {
    opacity: 0.5;
    transform: translateX(-75px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes load2 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
    transform: translateX(150px);
  }

  75% {
    transform: translateX(75px);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
}

@keyframes load3 {
  0% {
    opacity: 0;
  }

  66% {
    opacity: 0;
    transform: translateY(150px);
  }

  78% {
    opacity: 0.5;
    transform: translateY(75px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes load4 {
  0% {
    opacity: 0;
  }

  66% {
    opacity: 0;
  }

  78% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes load5 {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>