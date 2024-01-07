<template>
  <section>
    <!-- 取出localstorage內的資料顯示在頁面上 -->
    <div v-for="(info) in localCont">
      <img :src="info.icon" alt="">
      <p>{{info.date}}</p>
      <p>{{info.time}}</p>
      <p>{{info.note}}</p>
      
      <Button @click="remove(info.id)" >
        刪除
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { type Item } from "@/interface/item.interface";
import Button from "@/components/Button.vue"
const localCont = ref<Item[]>([]);

onMounted(() => {
  const a = localStorage.getItem("list");
  if (a !== null) {
    localCont.value = JSON.parse(a);
    console.log(localCont.value);
  }
});

function remove(id:string){
const index = localCont.value.findIndex(item=>
  item.id===id
)

//splice 去查
localCont.value.splice(index,1);
console.log(localCont.value);

localStorage.setItem('list',JSON.stringify(localCont.value))
}


</script>
