const express = require('express');
const app = express();

app.get('/', (req, res) => {
    
    const foods = ['pizza', 'burger', 'chicken', 'steak', 'salad'];
    const food = foods[Math.floor(Math.random() * foods.length)];
    res.send(foods);

});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);