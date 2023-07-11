class ShoppingList {
    items: string[];
    constructor(items: string[]) {
        this.items = [...items];
    }
    addItem(item: string) {
        this.items = [...this.items, item];
    }
    removeItem(item: string) {
        this.items = this.items.filter(i => i !== item);
    }
}

const shoppingList = new ShoppingList(['Milk', 'Sugar']);
shoppingList.addItem('Bread');
console.log(shoppingList.items);
shoppingList.removeItem('Sugar');
console.log(shoppingList.items);