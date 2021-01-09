exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC04_CART', function(table) {
        table.increments("cartId").primary();
        table.string("email");
        table.integer('productItemsId').unsigned().notNullable().references('prodcutItemId').inTable('SHLC06_PRODUCTITEM').onDelete('CASCADE').index();
        table.integer('quantity')
        table.double('price', 6, 2);
        table.double('discountprice', 6, 2);
        table.double('shipping', 6, 2);
        table.double('tax', 6, 2);
        table.double('totalPrice', 6, 2);
        table.dateTime('purchasedon');
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC04_CART');
};