// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem (item){
    basket.push(item);

    return true
}

console.log('adding item to basket, should return true', addItem('milk'));
console.log('adding item to basket, should return true', addItem('Eggs'));
console.log('adding item to basket, should return true', addItem('Bread'));

function listItem (array){
    for (let index = 0; index < array.length; index++){
        const item = array [index];

        console.log( 'logging basket item at index ${index}: ${item}')
    }
}

listItem(basket);

function empty() {
    basket = [];

}
empty(basket);
console.log(basket)