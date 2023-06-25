<template>
    <div class="fortune-container">
        <router-view />
    </div>
    <Subnav />
</template>
    
<script setup lang='ts'>
import Subnav from '@/components/fortune/common/Subnav.vue'
    
</script>
    
<style lang="scss">
.fortune-container{
    height: calc(100% - 50px);
}
    
</style>