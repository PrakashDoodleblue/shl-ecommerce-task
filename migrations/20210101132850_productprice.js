exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC03_PRODUCTPRICE', function(table) {
        table.increments("priceId").primary();
        table.integer('productCategoryId').unsigned().notNullable().references('categoryId').inTable('SHLC01_CATEGORY').onDelete('CASCADE').index();
        table.integer('ItemlistId').unsigned().notNullable().references('itemId').inTable('SHLC02_ITEMLIST').onDelete('CASCADE').index();
        table.double('price', 6, 2);
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC03_PRODUCTPRICE');
};