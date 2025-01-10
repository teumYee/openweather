import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("openweatherApi", {
  this: () => {
    return {
      cityName: "", // 도시 이름
      current: {
        temp: "", //현재 온도
        desc: "", //현재 날씨 묘사
        icon: "", //현재 날씨 아이콘
        barometer: "", // 기압
        feelsLike: "", // 체감온도
        humidity: "", // 습도
        uvi: "", // 자외선 수치
      },
      hourly: [],
    };
  },
  actions: {
    async fetchApi(payload) {
      try {
        const API_KEY = "bd2952b0261291bbe33caa218fb56a4e";
        // 위도, 경도, 좌표 변수
        let axisLat = payload.lat;
        let axisLon = payload.lon;
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${axisLat}&lon=${axisLon}&appid=${API_KEY}&units=metric`
        );
        const data = res.data;
        const current = res.data.current;
        const hourly = res.data.hourly;

        // 데이터 설정

        this.cityName = payload.cityName;
        this.current.temp = Math.floor(current.temp);
        this.current.desc = current.weather[0].description;
        this.current.feelsLike = current.feels_Like;
        this.current.humidity = current.humidity;
        this.current.uvi = current.uvi;
        this.current.icon = current.weather[0].icon;
        this.hourly = hourly.splice(23, hourly.length - 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
