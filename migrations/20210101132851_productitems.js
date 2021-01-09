exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC06_PRODUCTITEM', function(table) {
        table.increments("prodcutItemId").primary();
        table.string('itemcode');
        table.integer('productCategoryId').unsigned().notNullable().references('categoryId').inTable('SHLC01_CATEGORY').onDelete('CASCADE').index();
        table.integer('prodcutItemListId').unsigned().notNullable().references('itemId').inTable('SHLC02_ITEMLIST').onDelete('CASCADE').index();
        table.integer('productpriceId').unsigned().notNullable().references('priceId').inTable('SHLC03_PRODUCTPRICE').onDelete('CASCADE').index();
        table.integer('quantity');
        table.double('Itemprice', 6, 2);
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
        table.unique(['itemcode']);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC06_PRODUCTITEM');
};