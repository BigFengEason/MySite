<template>
  <!-- 头部 -->
  <div class="header">
    <div class="header-left">FZR<span>|MY PROFILE</span></div>
    <div class="header-right">
      <router-link to="/home" active-class="active">HOME<br />首页</router-link>
      <router-link to="/about" active-class="active"
        >ABOUT<br />关于</router-link
      >
      <router-link to="/blog" active-class="active">BLOG<br />博客</router-link>
      <router-link to="/photo" active-class="active"
        >PHOTO<br />相册</router-link
      >
      <router-link to="/other" active-class="active"
        >OTHER<br />其他</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* 头部样式 */
.header {
  height: 70px;
  width: 100%;
  background-color: rgba(119, 161, 194, 0.6);
  position: fixed;
  z-index: 1;
  animation: downward 0.5s linear;
  display: flex;
  z-index: 10;

  backdrop-filter: blur(2px);
}

.header:hover {
  background-color: rgba(122, 161, 194, 0.7);
}

/* 头部左侧Logo样式 */
.header > .header-left {
  padding-left: 70px;
  width: 400px;
  height: 70px;
  line-height: 70px;
  font-size: 60px;
  font-weight: 800;
  color: aliceblue;
}

.header > .header-left span {
  font-size: 25px;
  font-weight: 350;
}

/* 头部右侧导航样式 */
.header > .header-right {
  width: calc(100% - 630px);
  height: 100%;
  display: flex;
  justify-content: space-evenly;
}

.header > .header-right a {
  width: 120px;
  height: 100%;
  text-align: center;
  font-size: 20px;
  color: #83bcdd;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header > .header-right a:hover {
  text-decoration: none;
  border-radius: 10px;
  color: #496f9a;
  background-color: rgb(195, 234, 252);
  box-shadow: 0 0 20px rgb(189, 239, 251);
}

.active {
  text-decoration: none;
  background-color: #99c7ec;
  border-radius: 10px;
  color: #496f9a !important;
}

@keyframes downward {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 0.8;
  }
}
</style>