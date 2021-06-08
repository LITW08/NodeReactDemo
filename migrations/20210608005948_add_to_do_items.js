
exports.up = function(knex) {
    return knex.schema.createTable('toDoItems', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.date('dueDate').notNullable();
        table.date('completedDate');
        table.integer('categoryId').references('id').inTable('categories');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('toDoItems');
};
