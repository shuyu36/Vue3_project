<template>
    <Header></Header>
    <main>
        <RouterView></RouterView>
    </main>
    <Footer></Footer>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
<style scoped lang="scss">
main{
    height: calc(100vh - 80px);
}
</style>
