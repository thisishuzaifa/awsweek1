const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello aws </h1>');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);