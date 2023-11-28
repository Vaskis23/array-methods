const TYPE = 2;
const NAME = 1;
const PRICE = 0;

const menu = [
    ['food', 'pizza', 100],
    ['drink', 'Orange Juice', 25],
    ['food', 'Salad', 15],
    ['food', 'Soup', 50],
    ['drink', 'tea', 75],
];

// HW1: client wants to see only food within the price range of 50 ... 100
const foodWithinPriceRange = menu.filter(item => item[TYPE] === 'food' && item[PRICE] >= 50 && item[PRICE] <= 100);
console.log('Food within price range:', foodWithinPriceRange);

// HW2: client wants to see everything with an ascending price
menu.sort((itemA, itemB) => itemA[PRICE] - itemB[PRICE]);
console.log('Menu sorted by price:', menu);
