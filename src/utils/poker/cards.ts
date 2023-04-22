import { cloneDeep } from 'lodash-es'

type CardType = 'club' | 'heart' | 'diamond' | 'spade'
type CardSymbol = '♣️' | '❤️' | '♦️' | '♠️' | 'JUNIOR JOKER' | 'JOKER'

export interface Card {
    id: number
    value: number
    name: string
    type: CardType,
    symbol: CardSymbol

}
const CARD_TYPE : Record<CardType, CardSymbol>= {
    'club' : '♣️',
    'heart':'❤️',
    'diamond': '♦️',
    'spade': '♠️',
}
const CARDS = [
    {
        value: 3,
        name: '3'
    },
    {
        value: 4,
        name: '4'
    },
    {
        value: 5,
        name: '5'
    },
    {
        value: 6,
        name: '6'
    },
    {
        value: 7,
        name: '7'
    },
    {
        value: 8,
        name: '8'
    },
    {
        value: 9,
        name: '9'
    },
    {
        value: 10,
        name: '10'
    },
    {
        value: 11,
        name: 'J'
    },
    {
        value: 12,
        name: 'Q'
    },
    {
        value: 13,
        name: 'K'
    },
    {
        value: 14,
        name: 'A'
    },
    {
        value: 15,
        name: '2'
    },
]
const JOKERS = [ { value: 16, name: 'JOKER', symbol: 'JUNIOR JOKER'}, { value: 17, name: 'JOKER', symbol: 'JOKER'}]

export const ALL_CARDS: Card[] = getAllCards()

export function getAllCards() : Card[] {
    const cards: Card[] = []
    let id = 0
    CARDS.forEach(card => {
        Object.entries(CARD_TYPE).forEach(([cardType, cardSymbol]) => {
            const OneCard = {
                id: id++,
                ...card,
                type: cardType,
                symbol: cardSymbol 
            }
            cards.push(OneCard as Card)
        })
    })
    JOKERS.forEach(jokerCard => {
        cards.push({
            id: id++,
            ...jokerCard,
        } as Card)
    })
    return cards
}

export const shuffleCards = (cards) => {
    console.log(JSON.stringify(cards))
    const shuffled = cards.sort((a,b) => {
        return 0.5 - Math.random()
    })
    console.log(JSON.stringify(shuffled))

    return shuffled
    
}

export const deliverCards = (cards, toPersons = 3): Card[][] => {
    cards = cloneDeep(cards)
    const delivered = new Array(toPersons).fill([])
    let startIndex = 0
    cards.forEach((card, i) => {
        const index = i % toPersons
        delivered[index].push(card)
    })
    console.log('delivered', delivered)
    return delivered
}

