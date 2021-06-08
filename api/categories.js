const router = require('express').Router();
const categoriesDb = require('../db/categories');

router.post('/new', async (req, res) => {
    const { categoryName } = req.body;
    await categoriesDb.addCategory(categoryName);
    res.json({ status: 'ok' });
});

router.get('/getall', async (req, res) => {
    const categories = await categoriesDb.getAll();
    res.json(categories);
})


module.exports = router;