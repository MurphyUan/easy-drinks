export interface FireBaseEntity {
    id: string;
    bar: BarEntity; 
}

export interface BarEntity {
    name: string;
    description: string;
    menu: MenuItemEntity[];
}

export interface MenuItemEntity {
    id: string;
    name: string;
    description: string;
    disabled: boolean;
    imageUri: string;
    ingredients: Array<string>;
    price: number;
}

export interface OrderEntity {
    id: string;
    data: OrderItemEntity;
}

export interface OrderItemEntity {
    items: ItemEntity[];
    location: number;
    total: number;
}

export interface ItemEntity {
    id: string;
    name: string;
    price: number;
    quantity: number;
}