// // Vuex 중앙집중식 상태관리
// // main.js에 연동

// import { createStore } from "vuex";

// export default createStore({
//   // state: 실제로 취급하는 데이터 혹은 전역적으로 사용되는 데이터.
//   state: {
//     cityName: "이 state는 테스트 데이터입니다.",
//     num1: 0,
//   },
//   mutations: {
//     // 이쪽 state는 num1++
//     // payload 값이 a로 담김.
//     increment(state, a) {
//       state.num1++;
//     },
//     // state.cityName에는 "서울"이 할당.
//     changeCityName(state) {
//       state.cityName = "서울, 뮤테이션이 동작한 뒤의 데이터입니다.";
//     },
//   },
//   //computed 같은 속성.
//   getters: {
//     // 기본 컴포넌트에서 사용되는 computed 속성과 동일하다.
//     // 계산된 형태의 로직을 거친 후에 새로운 데이터 값을 할당시켜줌.
//     changeCityName(state) {
//       return state.cityName.split(" ").join();
//     },
//   },
//   actions: {
//     increment() {
//       // 로직을 관리하는 역할이 더 크다. 이것에 더 중점을 두고 있다.

//       context.commit("increment", payload);

//       // actions에서는 mutations 처럼 state를 바로 불러올 순 없다.
//       // context라는 객체 데이터를 호출을 해서, 가지고 와서 context를 참조하여 데이터를 불러온다.
//       // context는 state, getters, mutations를 활용할 수 있는 데이터를 담고 있다.

//       // 객체구조분해 방법으로 불러올 수도 있다.
//       //   functionName({state, getters}) {
//       //   }
//       //   functionName({state, getters, commit}) {
//       //   }
//       // commit 부분을 참조하면 context 생략이 가능.
//       // this.commit();

//       // 함수가 실행될 때, 두 번째 매개변수 자리는 인자로 돌아온 특정한 데이터를 payload라는 이름으로 받는다.
//     },
//   },
// });

import { createStore } from "vuex";
import openWeatherApi from "./api";

export default createStore({
  modules: {
    openWeatherApi,
  },
});
