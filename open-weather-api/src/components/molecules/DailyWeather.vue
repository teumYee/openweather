<template>
  <div class="daily-weather">
    <div class="daily-weather__data">
      <span class="daily-weather__data__date">{{
        Unix_timeStamp(data.dt)
      }}</span>
      <div class="daily-weather__data__temp">
        <span class="high">{{ Math.round(data.temp) + "&deg;" }}</span>
        /
        <span class="low">{{ Math.floor(data.wind_speed) }}</span>
        <span class="low" style="font-size: 20px; margin-top: 8px"></span>
      </div>
      <div class="daily-weather__data__icon">
        <img src="../../assets/images/${data.weather[0].icon}.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datat: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  // js로 함수를 만들어서 전달받은 데이터를 입맛에 맞게
  methods: {
    Unix_timeStamp(dt) {
      let date = new Date(dt * 1000);
      let hour = date.getHours().toString.padStart(2, "0");

      return hour.subString(-2) + "시";
    },
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
