<template>
  <div>
    <!-- <span>해당 레이아웃은 자식 컴포넌트 입니다.</span>
    <span>{{ sendProps.title }}</span>
    <span>{{ sendProps.type }}</span>

    <button @click="sendEvent">버튼</button> -->
    {{ sendProps }}
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from "vue";
import { Data } from "@/types/about/childComponent";
// // props 속성
// const props = defineProps({
//   sendProps: {
//     type: Object,
//     required: true,
//   },
// });

// // emit
// const data = "이 데이터는 자식컴포넌트에서 생성된 데이터입니다."
// const test = ref("test")
// // send-event라는 포장지에 담아서
// const emit = defineEmits(["send-event"]){
//     console.log();
// }

// function sendEvent(){
//     emit("send-event",data);
//     emit("send-event",test.value);
// }

const data = "자식컴포넌트에서 생성된 데이터입니다.";
const createdChildComponentFunction = () => {
  console.log(data);
};
// 이 함수를 내보낼 것이다.
// 이 컴포넌트를 이용하는 부모 컴포넌트는 이 createdChildComponentFunction으로 접근할 수 있음.
defineExpose({ createdChildComponentFunction });

// interface Data {
//   title: string;
//   type: string;
// }

interface Props {
  sendProps: Data;
}

const props = defineProps<Props>();
// 기준값
const { sendProps } = toRefs(props);

const number = ref<number>(0);
const string = ref<string>("");
const test = ref<string | number>;
// ts 사용시, 실무에서 'any' 사용은 최소화하기!
const object = ref<any[]>([]);
const object2 = ref<string[]>([]);
const object3 = ref<number[]>([]);
</script>

<style lang="scss" scoped></style>
