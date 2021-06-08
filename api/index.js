const router = require('express').Router();
const categories = require('./categories');
const toDoItems = require('./to-do-items');

router.use('/categories', categories);
router.use('/todoitems', toDoItems);

module.exports = router;