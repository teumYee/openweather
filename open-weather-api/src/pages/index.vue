<template>
  <!-- <h1>{{ this.$store.state.cityName }}</h1>
  <h1>{{ this.$store.state.num1 }}</h1> -->
  <!-- 클릭을 했을 때, changeState 메서드가 동작. -->
  <!-- 버튼 1을 누르면 뮤테이션이 동작한 뒤의 데이터입니다. -->
  <!-- <button @click="changeState">버튼1</button> -->
  <!-- 버튼 2를 누르면 숫자가 증가-->
  <!-- <button @click="increment">버튼2</button> -->
  <MAINPAGE />
</template>

<script setup>
import MAINPAGE from "@components/organisms/index.vue";
// // export default {
// //   components: {
// //     MAINPAGE,
// //   },
// //   data() {
// //     return {};
// //   },
//   // methods: {
//   //   changeState() {
//   //     this.$store.commit("changecityName");
//   //   },
//   //   increment() {
//   //     this.$store.commit("increment");
//   //   },
//   // },
// };
</script>

<style lang="scss" scoped>
@import "@assets/styles/main.scss";

.page {
  width: 100vw;
  height: 100vh;

  background-color: $color-white-100;
}
</style>
