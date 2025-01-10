<template>
  <!-- <div>
    <p>책을 가지고 있다.</p>
    <span>{{ author }}</span>
    <span>{{ computedAuthor }}</span>
  </div> -->
  <div><span>부모 컴포넌트 입니다.</span></div>
  <!-- // ChildComponent는 data를 sendProps라는 포장지에 싸서 보내겠다. -->
  <!-- <ChildComponent :sendProps="data" @send-event="parentEvent" /> -->
  <ChildComponent ref="childComponentRef" />
  <button @click="getData">버튼</button>
</template>

// TypeScript 선언
<script setup lang="ts">
// import { reactive } from "vue";

// const author = reactive({
//   name: "John Doe",
//   books: ["Book-01", "Book-02", "Book-03"],
// });

// const computedAuthor = computed(() => {
//   return author.books.length > 0
//     ? "배열 데이터 길이가 0보다 큽니다."
//     : "배열 데이터 길이가 0보다 작습니다.";
// });

import ChildComponent from "./ChildComponent.vue";
import { ref } from "vue";

// const data = {
//   title: "부모 컴포넌트 - title",
//   type: "부모 컴포넌트 - type",
// };

// function parentEvent(data) {
//   console.log(data);
// }

const childComponentRef = ref<InstanceType<typeof ChildComponent> | null>(null);
const getData = () => {
  childComponentRef.value?.createdChildComponentFunction();
};
</script>

<style lang="scss" scoped></style>
