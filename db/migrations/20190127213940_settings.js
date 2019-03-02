const TABLE_NAME = 'settings';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNullable();
    table.string('status').notNullable();
    table.timestamp('founded').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};