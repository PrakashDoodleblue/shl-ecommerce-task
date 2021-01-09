exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC02_ITEMLIST', function(table) {
        table.increments("itemId").primary();
        table.string('itemName');
        table.string('itemImage');
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
        table.unique(['itemName']);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC02_ITEMLIST');
};