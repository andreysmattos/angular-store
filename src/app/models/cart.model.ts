export interface CartItem {
    id: number;
    name: string;
    product: string;

    price: number;
    quantity: number;
}

export interface Cart {
    items: Array<CartItem>;
}