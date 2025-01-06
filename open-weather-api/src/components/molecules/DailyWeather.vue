<template>
  <div class="daily-weather">
    <div class="daily-weather__data">
      <span class="daily-weather__data__date">15시</span>
      <div class="daily-weather__data__temp">
        <span class="high">최고온도</span>
        <span class="low">최저온도</span>
        <span class="low" style="font-size: 20px; margin-top: 8px">5m/s</span>
      </div>
      <div class="daily-weather__data__icon">
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/styles/main.scss";
.daily-weather {
  display: flex;
  align-items: center;
  justify-content: center;

  &__data {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__temp {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 32px;
      font-weight: 100;

      color: $color-white-200;

      .high {
        color: $color-black-900;
      }
    }
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 80px;
      }
    }
  }
}
</style>
