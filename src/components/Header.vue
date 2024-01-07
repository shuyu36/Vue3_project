<template>
    <header class="bg-green-300 fixed w-full h-20">
        <RouterLink :to="RoutingPath.Add" class="text-white cursor-pointer hover:text-warm-200">
            新增
        </RouterLink>
        <RouterLink :to="RoutingPath.Home" class="text-white cursor-pointer hover:text-warm-200">
            首頁
        </RouterLink>

    </header>
</template>

<script lang='ts' setup>
import { RouterLink, RouterView } from "vue-router";
import { RoutingPath} from "@/consts/routingPath.const"

</script>

<style lang='scss' scoped>
</style>