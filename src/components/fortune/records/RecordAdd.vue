
<template>
    <ul>
        <li v-for="category in categories" :key="category.id">
        {{  category.name }}
        </li>
    </ul>
</template>
    
<script setup lang='ts'>
import { useFortuneCategory } from '@/hooks/useFortuneCategory';

 const categories = useFortuneCategory();
</script>
    
<style>
    
</style>