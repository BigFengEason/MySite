<template>
  <!-- 首页 -->
  <div class="home">
    <div class="title">Cease to struggle <br />and you cease to live</div>
    <div class="main">
      <router-link to="/about">
        <div class="content">
          <img src="./images/content1.jpg" />
          <h1>关于</h1>
          <p>关于我的一些信息，你可以从这里了解我的背景和其他相关信息</p>
          <p>
            For some information about me, you can learn about my background and
            other related information from here
          </p>
        </div>
      </router-link>
      <router-link to="/blog">
        <div class="content">
          <h1>博客</h1>
          <p>关于我的博客，记录了一些学习过程，你可以在这里了解我的学习经历</p>
          <p>
            About my blog, some learning process is recorded, you can learn
            about my learning experience here
          </p>
          <img src="./images/content2.jpg" />
        </div>
      </router-link>
      <router-link to="/photo">
        <div class="content">
          <img src="./images/content3.jpg" />
          <h1>相册</h1>
          <p>我的相册，关于一些我喜欢的艺术作品</p>
          <p>My photo album, about some works of art that I like</p>
        </div>
      </router-link>
      <router-link to="/other">
        <div class="content">
          <h1>其他</h1>
          <p>加入我们(虽然还没有"们")，我的其他制作</p>
          <p>Join us (although there is no "we"), my other productions</p>
          <img src="./images/content4.jpg" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 1450px;
}

/* home标题样式 */
.home > .title {
  font-size: 100px;
  text-align: center;
  color: aliceblue;
  font-weight: bold;
  padding-top: 200px;
  height: calc(100vh - 200px);
  background-image: url(./images/home2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transition: 0.5s linear 0s;
  animation: load 0.5s;
  display: flex;
  justify-content: space-evenly;
  white-space: nowrap;
  text-shadow: 0 0 20px rgb(255, 255, 255);
}

/* home主题样式 */
.home > .main {
  width: 100%;
  height: 900px;
  background-image: url(./images/home1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

/* 内容样式 */
.home > .main > a {
  flex-shrink: 0;
  flex-basis: 264px;
  text-decoration: none;
}

.home > .main > a > .content {
  position: relative;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 20px #1e1e1e;
  background-color: rgba(219, 235, 241, 0.7);
  transition: all linear 0.2s;
}

.home > .main > a > .content:hover {
  color: #496f9a;
  transform: scale(1.05, 1.05);
}

.home > .main > a > .content h1 {
  text-align: center;
  font-size: 4em;
  margin: 20px;
}

.home > .main > a > .content p {
  color: #71b6ca;
  font-size: 16px;
  margin: 20px;
  text-indent: 2em;
}

.home > .main > a > .content img {
  width: 100%;
  opacity: 0.9;
  transition: all linear 0.2s;
}

.home > .main > a > .content img:hover {
  transform: scale(1.05, 1.05);
}

.home > .main > a:nth-child(even) > .content img {
  position: absolute;
  bottom: 0;
}

@keyframes load {
  0% {
    background-position-y: 100px;
    opacity: 0;
  }

  100% {
    background-position-y: 0px;
    opacity: 1;
  }
}
</style>