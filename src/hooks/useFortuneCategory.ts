import { FortuneCategory } from "@/types/fortune"

export const useFortuneCategory = (): FortuneCategory[] => {
    const category: FortuneCategory[] = [
        {
            id: 0,
            name: "日用",
            icon: "mdi-home",
        }, 
        {
            id: 1,
            name: "娱乐",
            icon: "mdi-home",
        },
        {
            id: 2,
            name: "汽车",
            icon: "mdi-home",
        },
    ]

    return category
}