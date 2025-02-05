// importiamo express e utlizziamo la parte di routing
const express = require('express')
const router = express.Router();


// rotte di CRUD dei post
// index
router.get('/', function (req, res) {
    res.send('Lista dei post');
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli del singolo post' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post ' + req.params.id);
});

// esportiamo il modulo del router
module.exports = router;