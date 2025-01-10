//createWebHashHistory: 해시 모드의 브라우징 히스토리를 생성하는 함수.
// URL에 해시(#)를 사용하여 페이지를 구분
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@pages/index.vue";
// import About from "@pages/about.vue";

export default createRouter({
  history: createWebHashHistory(),
  //페이지를 구분해주는 개념.
  // 라우팅 테이블을 정의함. 각 경로는 특정 컴포넌트와 연결됨.
  routes: [
    {
      path: "/", // 루트 경로로 설정되어있음.
      name: "home", // 경로의 이름.
      component: Home, //Home 컴포넌트
    },
    // // 컴포지션 학습
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About,
    // },
  ],
});
