<template>
  <div class="page">
    <header class="page__header">
      <span class="page__header__region">Seoul, Korea</span>
      <span class="page__header__date">1900.01.01</span>
    </header>
    <body div class="page__body">
      <div class="page__body__main">
        <div class="data-box">
          <WEATHERBOX />
          <div class="data-box__graph-box">
            <GRAPH />
            <GRAPH />
            <GRAPH />
          </div>
        </div>
        <MAP />
      </div>
      <div class="page__body__daily">
        <DAILYWEATHER />
      </div>
    </body>
  </div>
</template>

<script>
import WEATHERBOX from "../molecules/WeatherBox.vue";
import MAP from "../molecules/Map.vue";
import DAILYWEATHER from "../molecules/DailyWeather.vue";
import GRAPH from "../molecules/Graph.vue";
// 컴포넌트각각 여기로 헤쳐모여
export default {
  components: {
    WEATHERBOX,
    MAP,
    DAILYWEATHER,
    GRAPH,
  },
  data() {
    return {};
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
