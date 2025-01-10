<template>
  <!-- (여기서 vue 파일을 생성할 때 마다 template의 main class 이름을  -->
  <!-- component vue 파일 이름으로 먼저 맞추는 습관을) -->
  <div class="graph">
    <div class="graph__outer"></div>
    <div class="graph__inner"></div>
    <div
      class="graph__middle"
      :style="{
        background: `conic-gradient(
              #3abbe0 0% ${data.value},
              #ffffff ${data.value} 100%
            )`,
      }"
    ></div>
    <span class="graph__value">{{ data.value }}</span>
    <span class="graph__name">{{ data.label }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
      type: Object,
      required: true,
    },
})

export default {
  // 데이터를 전달받음.
  props: {
    data: {
      type: Object,
      required: true,
  },
  data() {
    return {
      // 초기화할 데이터가 있다면 여기에 추가
      data: {
        value: "50%",
      },
    };
  },
  created() {
    // 컴포넌트가 생성된 직후의 접근할 수 있는 라이프 사이클 훅
    // const res = await axios.get(
    //   "https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=126&appid=823b934b8ed392af155a8e73ac5721f7&units=metric"
    // );
    // this.currentTemp = res.data.current.temp;
    // this.currentDesc = res.data.current.weather[0].description;
    // this.currentBarometer = res.data.current.pressure;
    // this.currentFeelsLike = res.data.current.feels_like;
    // this.currentHumidity = res.data.current.humidity;
    // this.currentWeatherIcon = res.data.current.weather[0].icon;
    // console.log(res);
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/color.scss";
.graph {
  // 그래프라는 클래스가 기준이 됨.
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;

  width: 180px;
  height: 180px;

  border-radius: 50%;

  &__outer {
    position: absolute;

    width: 160px;
    height: 160px;

    background-color: $color-white-000;
    border-radius: 50%;
  }
  &__inner {
    position: absolute;
    //position을 썼을 때 화면 겹치는 것을 방지하기 위해서 z축을 컨트롤
    // 숫자가 높을수록 위쪽으로
    z-index: 2;

    width: 124px;
    height: 124px;

    background-color: $color-white-100;
    border-radius: 50%;

    box-shadow: 0px 0px 10px 0px inset rgb(206, 206, 206);
  }
  &__middle {
    position: absolute;

    width: 160px;
    height: 160px;

    border-radius: 50%;
  }
  &__value {
    position: absolute;
    z-index: 3;

    font-size: 24px;
  }
  &__name {
    position: absolute;
    bottom: -24px;

    font-weight: 300;
  }
}
</style>
