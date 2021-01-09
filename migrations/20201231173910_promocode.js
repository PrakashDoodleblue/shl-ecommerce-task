exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC05_PROMOCODE', function(table) {
        table.increments("promocodeId").primary();
        table.string('promocode');
        table.string('discountpercentage');
        table.dateTime('startDate');
        table.dateTime('endDate');
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC05_PROMOCODE');
};