exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC01_CATEGORY', function(table) {
        table.increments("categoryId").primary();
        table.string('categoryName');
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
        table.unique(['categoryName']);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC01_CATEGORY');
};