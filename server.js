const express = require('express');
const app = express();

app.use(express.json());

const pokemons = [
    {
        id: 1,
        name: 'Bulbasaur',
        type: 'grass',
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45,
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
];

app.get("/api/pokemon", (req, res) => {
    res.send({pokemons: pokemons});
});

app.post("/api/pokemon", (req, res) => {
    const data = req.body;
    data.id = pokemons.length + 1;
    pokemons.push(data);
    res.send({pokemons: pokemons});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}
);