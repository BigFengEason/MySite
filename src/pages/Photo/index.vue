<template>
  <!-- 照片 -->
  <div class="photo">
    <div class="outer">
      <div class="banner">
        <el-carousel :interval="4000" type="card" height="530px">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <!-- <h3 class="medium">{{ v.value }}</h3> -->
            <img :src="item.value" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  data() {
    return {
      imgList: [
        { id: 0, value: require("./images/photo1.jpg") },
        { id: 1, value: require("./images/photo2.jpg") },
        { id: 2, value: require("./images/photo3.jpg") },
        { id: 3, value: require("./images/photo4.jpg") },
        { id: 4, value: require("./images/photo5.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.photo {
  width: 100vw;
  height: 100vh;
  animation: load2 0.5s linear;
}
.photo > .outer {
  width: 100%;
  height: calc(100vh + 100px);
  background-image: url(./images/background.jpg);
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  padding-top: 130px;
}

.photo > .outer > .banner {
  width: 90vw;
}

.el-carousel {
  animation: load 1s linear;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

@keyframes load {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  33% {
    opacity: 0.33;
    transform: translateY(200px);
  }
  66% {
    opacity: 0.66;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
  }
}

@keyframes load2 {
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
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>