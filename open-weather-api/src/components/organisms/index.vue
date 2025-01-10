<template>
  <div class="page">
    <header class="page__header">
      <span class="page__header__region">{{ cityName }}</span>
      <span class="page__header__date">{{ date }}</span>
    </header>
    <body div class="page__body">
      <div class="page__body__main">
        <div class="data-box">
          <WEATHERBOX :data="currentData" />
          <div class="data-box__graph-box">
            <!-- item이라는 데이터를 프롬 , 반복문 사용-->
            <GRAPH v-for="item in graphData" :key="item" :data="item" />
          </div>
        </div>
        <MAP />
      </div>
      <div class="page__body__daily">
        <DAILYWEATHER v-for="item in hourlyData" :key="item" :data="item" />
      </div>
    </body>
  </div>
</template>

<script set up>
import WEATHERBOX from "../molecules/WeatherBox.vue";
import MAP from "../molecules/Map.vue";
import DAILYWEATHER from "../molecules/DailyWeather.vue";
import GRAPH from "../molecules/Graph.vue";
import dayjs from "dayjs";
// import axios from "axios";
import { useStore } from "@/store/pinia";
// 컴포지션 import
import { ref, reactive, computed } from "vue";

// 그동안 options api를 컴포지션 api로 옮김.
const axis = reactive({
  lat: 37.5683,
  lon: 126.9778,
  cityName: "Seoul",
});

// Pinia에 있던 데이터가 여기로
const store = useStore();
store.fetchApi(axis);

// vuex
// store.dispatch("openWeatherApi/fetchApi", axis);

// 해당 도시 이름
// const cityName = computed(() => {
//   return store.state.openWeatherApi.cityName;
// });
const cityName = computed(() => {
  return store.cityName;
});

// 현재 날짜 및 시간
const date = computed(() => {
  const current = dayjs(new Date());
  return current.format("dd, DD MMM YYYY");
});
// 현재 시간에 따른 날씨 데이터
// const currentData = computed(() => {
//   return store.state.openWeatherApi.current;
// });
const currentData = computed(() => {
  return store.current;
});
// 그래프 데이터
const graphData = computed(() => {
  const res = [
    // 하나 하나가 아이템을 지칭
    { label: "Precipitation", value: "38%" },
    { label: "Humidty", value: currentData.value.humidity + "%" },
    { label: "UV Index", value: currentData.value.uvi },
  ];
  return res;
});
// 시간대별 데이터
// const hourlyData = computed(() => {
//   const res = store.state.openWeatherApi.hourly;
//   res.forEach((item) => {
//     item.dt = Unix_timeStamp(item.dt);
//   });
//   return res;
// });
const hourlyData = computed(() => {
  const res = store.hourly;
  res.forEach((item) => {
    item.dt = Unix_timeStamp(item.dt);
  });
  return res;
});

function Unix_timeStamp(dt) {
  let date = new Date(dt * 1000);
  let hour = date.getHours().toString.padStart(2, "0");
  return hour.slice(-2) + "시";
}

// 컴포넌트각각 여기로 헤쳐모여
export default {
  // components: {
  //   WEATHERBOX,
  //   MAP,
  //   DAILYWEATHER,
  //   GRAPH,
  // },

  // 컴포넌트로 선언해서 지워도 됨. data()
  data() {
    return {
      axis: {
        // Default Seoul Axis
        // lat: 37.5683,
        // lon: 126.9778,
        // cityName: "Seoul",
      },

      // hourlyData: [],
    };
  },
  // created() {
  //   store.dispatch("openWeatherApi/fetchApi", this.axis);
  // },
  computed: {
    // cityName() {
    //   // 해당 도시 이름
    //   return store.state.openWeatherApi.cityName;
    // },
    // date() {
    //   // 현재 날짜 및 시간
    //   const current = dayjs(new Date());
    //   return current.format("dd, DD MMM YYYY");
    // },
    // currentData() {
    //   // 현재 시간에 따른 날씨 데이터
    //   return store.state.openWeatherApi.current;
    // },
    // graphData() {
    //   const res = [
    //     // 하나 하나가 아이템을 지칭
    //     { label: "Precipitation", value: "38%" },
    //     { label: "Humidty", value: this.currentData.humidity + "%" },
    //     { label: "UV Index", value: this.currentData.uvi },
    //   ];
    // },
    // hourlyData() {
    //   // 일일 데이터
    //   const res = store.state.openWeatherApi.hourly;
    //   res.forEach((item) => {
    //     item.dt = this.Unix_timeStamp(item.dt);
    //   });
    //   return res;
    // },
  },
  methods: {
    Unix_timeStamp(dt) {
      let date = new Date(dt * 1000);
      let hour = date.getHours().toString.padStart(2, "0");
      return hour.slice(-2) + "시";
    },
  },

  // async created() {
  //   const res = await axios.get(
  //     "https://api.openweathermap.org/data/2.5/onecall?lat=33&lon=126&appid=9245b448bf6eea1ec02c2aefdaeb48a2&units=metric"
  //   );
  //   console.log(res);
  //   this.hourlyData = res.data.hourly;
  // },
};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__region {
      font-size: 48px;
    }
    &__date {
      font-weight: 300;
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;

    width: 100%;

    &__main {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 100px;

      .data-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__graph-box {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 80px;
          margin-top: 32px;
        }
      }
    }
    &__daily {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 82.5%;

      margin-top: 48px;
      gap: 48px;

      overflow-x: scroll;
    }
  }
}
</style>
