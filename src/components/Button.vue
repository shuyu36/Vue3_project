<template>
    <button class=" px-5 py-3" :class="{
        'bg-warm-200 text-green-300 hover:bg-green-200':!outline,
        'bg-white outline outline-warm-200 outline-2 hover:outline-green-300':outline
    }">
        <slot></slot>
    </button>
</template>

<script lang='ts' setup>
import { defineComponent } from 'vue';

//defineProps 父元素傳至子元素
//defineEmit 子元素傳至父元素
//兩者都不需另外import
const props = defineProps({
    outline:{
        type:Boolean,
        default:false,
    }
})
//defineComponent 為定義這項Component 
defineComponent({
    name:"ButtonComponent"
})
</script>

<style lang='scss' scoped>
</style>