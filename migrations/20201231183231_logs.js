exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('SHLC07_ACTIVITY_LOGS', function(table) {
        table.increments("logId").primary();
        table.string("ActivityName");
        table.string("ActivityTableName");
        table.boolean('status').defaultTo(true);
        table.timestamps(true, true);
    });
};
exports.down = function(knex) {
    return knex.schema.dropTable('SHLC07_ACTIVITY_LOGS');
};