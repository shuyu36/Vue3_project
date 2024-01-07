import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePicStore = defineStore('picStore', () => {
  const pics = ref([
    {
      name: "pic1",
      link: "images/pic1_0.png"
    },
    {
      name: "pic2",
      link: "images/pic2_0.png"
    },
    {
      name: "pic3",
      link: "images/pic3_0.png"
    }, {
      name: "pic4",
      link: "images/pic4_0.png"
    }, {
      name: "pic5",
      link: "images/pic5_0.png"
    }, {
      name: "pic6",
      link: "images/pic6_0.png"
    }
  ]);

  function a(){
    console.log('1234');
  }
  return {pics,a}
})
