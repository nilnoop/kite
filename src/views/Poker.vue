<template>
        <div class="poker">
          <button @click="onShuffle">shuffleCards</button>
          <button @click="onShuffle">shuffleCards</button>
          <div class="all-cards">
            <PokerCard :card="card" v-for="card in cards" :key="card.id" />
          </div>
          <div class="user-card">
            <div class="user" v-for="delivered in deliveredCards">
              <PokerCard :card="card" v-for="card in delivered" />
            </div>
          </div>

        </div>
</template>
    
<script setup lang='ts'>
import PokerCard from '@/components/poker/PokerCard.vue';
import { getAllCards, shuffleCards, deliverCards } from '@/utils/poker/cards';
import { watch, computed, ref } from 'vue'

/**
 * create room
 * init points
 * shuffle cards
 * play
 * robot play
 * winning points
 * goon
 */
const cards = ref(getAllCards())

const onShuffle = () => {
  cards.value = shuffleCards(cards.value)
}


const deliveredCards = ref([[]])
watch(cards.value, () => {
  deliveredCards.value = deliverCards(cards.value, 3)
})

    
</script>
    
<style>
    .poker {
        
    }
    .user-card {}
    .user {
      border: 1px solid #333;
    }
</style>