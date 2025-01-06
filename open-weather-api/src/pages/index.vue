<template>
  <MAINPAGE />
</template>

<script>
import MAINPAGE from "@components/organisms/index.vue";
export default {
  components: {
    MAINPAGE,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/styles/main.scss";

.page {
  width: 100vw;
  height: 100vh;

  background-color: $color-white-100;
}
</style>
