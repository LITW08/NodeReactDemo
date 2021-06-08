const router = require('express').Router();
const toDoItemsDb = require('../db/to-do-items');

router.post('/add', async (req, res) => {
    await toDoItemsDb.add(req.body);
    res.json({ status: 'ok' });
});

router.get('/getall', async (req, res) => {
    
    const toDoItems = await toDoItemsDb.getAll();
    console.log(toDoItems);
    res.json(toDoItems);
})


module.exports = router;