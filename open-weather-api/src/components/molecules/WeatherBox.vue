<template>
  <!-- 컴포넌트를 만들 때, 최상위에 있는 태그는 컴포넌트 파일 이름을 따라갈 것. -->
  <div class="weather-box">
    <div class="weather-box__icon-box">
      <div class="weather-box__icon-box__info">
        <span class="temp">{{ Math.round(data.temp) + "°C" }}</span>
        <span class="desc">{{ data.desc }}</span>
        <span class="update">Updated 1:48pm</span>
      </div>
      <img
        :src="`../../assets/images/${data.icon}.png`"
        alt=""
        class="weater-box__icon-box__icon"
      />
    </div>
    <div class="weather-box__detail">
      <span class="weather-box__detail__item">{{ data.barometer }}mb</span>
      <span class="weather-box__detail__item"
        >Feels Like: {{ Math.floor(data.feelsLike) + "&deg;C" }}</span
      >
      <span class="weather-box__detail__item"
        >Humidity: {{ data.humidity }}%</span
      >
    </div>
  </div>
</template>

<script setup>
// import axios from "axios";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
// export default {
//   props: {
//     data: {
//       type: Object,
//       required: true,
//     },
//   },
// data() {
//   return {
//     currentTemp: "",
//     currentDesc: "",
//     currentBarometer: "",
//     currentFeelsLike: "",
//     currentHumidity: "",
//     currentWeatherIcon: "",
//   };
// },
//   async created() {
//     // 컴포넌트가 생성된 직후의 접근할 수 있는 라이프 사이클 훅
//     // const res = await axios.get(
//     //   "https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=126&appid=9245b448bf6eea1ec02c2aefdaeb48a2&units=metric"
//     // );
//     // this.currentTemp = res.data.current.temp;
//     // this.currentDesc = res.data.current.weather[0].description;
//     // this.currentBarometer = res.data.current.pressure;
//     // this.currentFeelsLike = res.data.current.feels_like;
//     // this.currentHumidity = res.data.current.humidity;
//     // this.currentWeatherIcon = res.data.current.weather[0].icon;
//     // console.log(res);
//   },
// };
</script>

<style lang="scss" scoped>
.weather-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .temp {
        font-weight: 500;
        font-size: 80px;
      }
      .desc {
        font-weight: 100;
        font-size: 28px;
        margin-top: -12px;
      }
      .update {
        font-weight: 100;
      }
    }
    &__icon {
      height: 160px;
    }
  }
  &__detail {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 16px;

    font-weight: 300;
    &__item {
      display: block;
      margin-top: 100px;
    }
  }
}
</style>
