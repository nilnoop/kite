<template>
        <div class="poker-card">{{ prop.card.name }}</div>
</template>
    
<script setup lang='ts'>
import type { Card  } from '@/utils/poker/cards'
interface PropData {
    card: Card
}
const prop = defineProps<PropData>()
    
</script>
    
<style>
    
</style>