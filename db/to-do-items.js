const knex = require('knex')({
    client: 'mssql',
    connection: {
        server: 'localhost',
        user: 'db_user',
        password: 'Foobar@1',
        database: 'to-do-items-node',
        options: {
            port: 1433,
            instanceName: 'SQLEXPRESS'
        }
    }
});

const groupByCategory = dbResults => {
    const categories = [];
    dbResults.forEach(result => {
        let category = categories.find(c => c.id === result.categoryId);
        if(!category) {
            category = {id: result.categoryId, name: result.name, toDoItems: []};
            categories.push(category);
        }
        
        category.toDoItems.push({id: result.id[0], title: result.title, dueDate: result.dueDate});
    });

    return categories;
}

const add = async toDoItem => {
    await knex('toDoItems').insert(toDoItem);
}

const getAll = async () => {
    const dbResults = await knex.from('toDoItems')
    .innerJoin('categories', 'toDoItems.categoryId', 'categories.Id')
    .select('*');

    return groupByCategory(dbResults);
}

module.exports = {
    add,
    getAll
}