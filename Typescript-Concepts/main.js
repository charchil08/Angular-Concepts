var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ShoppingList = /** @class */ (function () {
    function ShoppingList(items) {
        this.items = __spreadArray([], items, true);
    }
    ShoppingList.prototype.addItem = function (item) {
        this.items = __spreadArray(__spreadArray([], this.items, true), [item], false);
    };
    ShoppingList.prototype.removeItem = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    return ShoppingList;
}());
var shoppingList = new ShoppingList(['Milk', 'Sugar']);
shoppingList.addItem('Bread');
console.log(shoppingList.items);
shoppingList.removeItem('Sugar');
console.log(shoppingList.items);
