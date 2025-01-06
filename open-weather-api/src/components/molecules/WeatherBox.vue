<template>
  <!-- 컴포넌트를 만들 때, 최상위에 있는 태그는 컴포넌트 파일 이름을 따라갈 것. -->
  <div class="weather-box">
    <div class="weather-box__icon-box">
      <div class="weather-box__icon-box__info">
        <span class="temp">{{ Math.round(currentTemp) + "°C" }}</span>
        <span class="desc">{{ currentDesc }}</span>
        <span class="update">Updated 1:48pm</span>
      </div>
      <img
        :src="`../../assets/images/${currentWeatherIcon}.png`"
        alt=""
        class="weater-box__icon-box__icon"
      />
    </div>
    <div class="weather-box__detail">
      <span class="weather-box__detail__item">{{ currentBarometer }}mb</span>
      <span class="weather-box__detail__item"
        >Feels Like: {{ Math.round(currentFeelsLike) + "&deg;C" }}</span
      >
      <span class="weather-box__detail__item"
        >Humidity: {{ currentHumidity }}%</span
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      currentTemp: "",
      currentDesc: "",
      currentBarometer: "",
      currentFeelsLike: "",
      currentHumidity: "",
      currentWeatherIcon: "",
    };
  },
  async created() {
    //컴포넌트가 생성된 직후의 접근할 수 있는 라이프 사이클 훅
    const res = await axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seoul?key=2ZVN24EB75VNNREN6P559FVQY&unitGroup=metric&lang=ko"
    );
    console.log(res);
    console.log(currentConditions);
    console.log(res.data); // 전체 응답 데이터를 출력하여 구조 확인
    // 예상 데이터 구조를 기반으로 데이터 추출
    const currentConditions =
      res.data.currentConditions || res.data.days[0].currentConditions;
    console.log(currentConditions); // 데이터 구조 확인
    // const currentConditions = res.data.currentConditions;
    this.currentTemp = currentConditions.temp;
    this.currentDesc = currentConditions.conditions;
    this.currentBarometer = currentConditions.pressure;
    this.currentFeelsLike = currentConditions.feelslike;
    this.currentHumidity = currentConditions.humidity;
  },
};
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
