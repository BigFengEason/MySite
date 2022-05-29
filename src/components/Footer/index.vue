<template>
  <!-- 页脚 -->
  <div class="footer clearfix">
    <p>@2021-2022|BY:FZR</p>
    <p>网页版权归FZR所有</p>
    <p>Cease to struggle and you cease to live</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* 页脚样式 */
.footer {
  position: relative;
  width: 100vw;
  height: 115px;
  background-color: rgba(119, 161, 194, 0.6);
  z-index: 1;
  backdrop-filter: blur(2px);
}

.footer p {
  text-align: center;
  font-size: 16px;
  color: black;
  margin: 8px 0;
}

.footer p:first-child {
  margin-top: 20px;
}
</style>