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

const addCategory = async categoryName => {
    await knex('categories').insert({ name: categoryName });
}

const getAll = async () => {
    return await knex('categories').select("*");
}

module.exports = {
    addCategory,
    getAll
}