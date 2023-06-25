<template>
    <div class="add-fortune">
        +
    </div>
    <RecordAdd />
</template>
    
<script setup lang='ts'>
import RecordAdd from '@/components/fortune/records/RecordAdd.vue'

    
</script>
    
<style>
    .add-fortune {
        position: fixed;
        right: 20px;
        bottom: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fdbf5c;
        color: #fff;
        font-size: 30px;
        text-align: center;
        line-height: 50px;
    }
</style>