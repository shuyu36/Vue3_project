<template>
  <section v-if="step === 1">
    <ul class="outline grid grid-cols-3 max-w-screen-md mx-auto">
      <li v-for="(pic, index) in pics" :key="index">
        <img
          :src="pic.link"
          :alt="pic.name"
          width="100%"
          height="auto"
          @click="add(pic)"
        />
      </li>
    </ul>
  </section>
  <section v-if="step === 2">
    {{ info }}
    <!-- 要透過綁定方式呈現 -->
    <!-- 動態載入的圖片需要放在public檔案夾內 -->
    <img :src="info.icon">
    <p>{{info.date}}</p>
    <p>{{info.time}}</p>
    <p>{{info.note}}</p>
    <textarea v-model="info.note" cols="30" rows="5" class="outline outline-warm-200"></textarea>
    <Button @click="save">儲存</Button>
  </section>
  <PopupModal v-if="showPopup" @close="closeModal"></PopupModal>
</template>

<script lang="ts" setup>
import PopupModal from "@/components/PopupModal.vue";
import { usePicStore } from "@/stores/picStore"; //將pinStore.ts引入
import { storeToRefs } from "pinia";
import { ref } from "vue";
import moment from "moment";
import Button from "@/components/Button.vue";

const picStore = usePicStore(); //使用引入的pinStore.ts function賦值在picStore上
const { pics } = storeToRefs(picStore); //存資料的變數需要透過storeToRefs解構出來使用，若是使用picstore內的function則如以下所示

// function useA(){
//   picStore.a();
// }



const info = ref({
  id:"",
  icon: "",
  date: "",
  time: "",
  note: "",
});

//先預設原始關閉為false
const showPopup = ref(false);
//定義section步驟
const step = ref(1);

//click後將值改為false
function showPopupModal() {
  showPopup.value = true;
}

//click 確認後的button後將值改為false 即可關閉Modalmask
function closeModal() {
  showPopup.value = false;
}

function add(pic: any) {
  //點選後進入步驟2
  step.value = 2;
  info.value.id=Date.now().toString();
  info.value.icon=pic.link;
  info.value.date=moment().format('YYYY-MM-DD');
  info.value.time=moment().format('HH:mm');
}

function save(){
  let tempList = [];
  const tempItem =localStorage.getItem('list');

  // 有值後透過判斷式跑這行並取代原先的陣列tempList
  if (tempItem!==null) {
    //兩個以上的儲存料取代原始的空陣列
    tempList =JSON.parse(tempItem);
    //parse語法 將字串轉為物件或陣列
  }

  //第一次儲存
  tempList.push(info.value);
  // console.log(tempList)
  localStorage.setItem('list', JSON.stringify(tempList));
}

</script>

<style lang="scss" scoped></style>
