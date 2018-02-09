var React = require('react/addons');

console.log('Hello JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [
    { name: "Ice Cream"},
    { name: "Waffles"},
    { name: "Candy", purchased: true},
    { name: "Snacks"}
];

React.render(<GroceryItemList items={initial} />, app);