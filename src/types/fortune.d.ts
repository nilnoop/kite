
export interface FortuneCategory {
    id: number;
    name: string;
    icon: string;
    parentId?: number;
    subcategories?: FortuneCategory[];
}

