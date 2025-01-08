<template>
  <div id="map"></div>
</template>

<script>
//
import mapAxis from "@assets/mapAxis.json";

export default {
  data() {
    return {};
  },
  // template가 렌더링 된 후에 접근할 수 있도록 하는 라이프 사이클 훅
  mounted() {
    // 카카오 디벨로퍼에서 발급받은 API_KEY
    const API_KEY = "885feb46e3e6211e685ee96821ea94ef";

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      // Global Kakao
      script.onload = () => {
        console.log("맵 스크립트 로드 완료");
        kakao.maps.load(this.initMap);
      };

      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=885feb46e3e6211e685ee96821ea94ef`;
      document.head.appendChild(script);
    }
  },
  methods: {
    // 미니맵 초기화
    initMap() {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        // 확대되는 수치가 어느 정도인지
        center: new kakao.maps.LatLng(36.73035, 127.967487),
        level: 13,
      };
      // 마커를 생성하기 위한 데이터로 임의의 mapAxis로 데이터 생성
      // map이란 함수는 js type이 array일때만 사용 가능하므로
      // 배열 하나하나의 요소를 positions이라는 임의의 이름으로 할당을 해준 다음,
      // 좌표의 position이 가지고 있는 요소의 좌표, cityName을 받아주고 있음.
      // 순차적으로 map 함수를 돌면서 반복하면서 마커를 생성하기 위해서 새로운 형태의 객체 생성.
      const map = new kakao.maps.Map(mapContainer, mapOption);
      // position을 반복을 통해서 새로운 형태의 객체 데이터로 return을 시켜준 다음,
      // positions 라는 새로운 배열의 이름으로 만들어줌.
      const positions = mapAxis.map((position) => ({
        latlng: new kakao.maps.LatLng(...position.latlng),
        cityName: position.cityName,
      }));

      // 마커를 생성.

      positions.forEach((item) => {
        const marker = new kakao.maps.Marker({
          position: item.latlng,
        });
        // 마커가 지도 위에 표시되도록 설정.
        marker.setMap(map);

        // 마커를 클릭했을 때, 클릭이벤트 생성함.
        kakao.maps.event.addListener(marker, "click", () => {
          const res = marker.getPosition();
          console.log(res);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 400px;
  height: 400px;

  border-radius: 16px;
  box-shadow: 0px 0px 24px 5px rgba(0, 0, 0, 0.1);
  background-color: beige;
}
</style>
