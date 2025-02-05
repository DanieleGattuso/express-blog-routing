

const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routers/posts.js');

app.use(express.static('public'));


// definiamo la rotta home
app.get('/', (req, res) => {
    res.send("Ciao sono la rotta Home");
})

// utilizziamo la rotta delle pizze andando a definire la parte iniziale delle rotte
app.use("/posts", postsRouter)


// avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})