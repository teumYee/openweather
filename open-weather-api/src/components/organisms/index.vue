<template>
  <div class="page">
    <header class="page__header">
      <span class="page__header__region">Seoul, Korea</span>
      <span class="page__header__date">{{ date }}</span>
    </header>
    <body div class="page__body">
      <div class="page__body__main">
        <div class="data-box">
          <WEATHERBOX />
          <div class="data-box__graph-box">
            <!-- item이라는 데이터를 프롬 , 반복문 사용-->
            <GRAPH v-for="item in graphData" :key="item.label" :data="item" />
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

<script>
import WEATHERBOX from "../molecules/WeatherBox.vue";
import MAP from "../molecules/Map.vue";
import DAILYWEATHER from "../molecules/DailyWeather.vue";
import GRAPH from "../molecules/Graph.vue";
import axios from "axios";
import dayjs from "dayjs";

export default {
  components: {
    MAP,
    DAILYWEATHER,
    GRAPH,
  },
  data() {
    return {
      graphData: [
        // 하나 하나가 아이템을 지칭
        { label: "Precipitation", value: "38%" },
        { label: "Humidty", value: "50%" },
        { label: "UV Index", value: "10" },
      ],
      hourlyData: [],
    };
  },
  computed: {
    date() {
      // 현재 날짜 및 시간
      const current = dayjs(new Date());
      return current.format("dd, DD MMM YYYY");
    },
  },
  async created() {
    const res = await axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/seoul?key=2ZVN24EB75VNNREN6P559FVQY&unitGroup=metric&lang=ko"
    );
    console.log(res);
    this.hourlyData = res.data.hourly;
  },
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
