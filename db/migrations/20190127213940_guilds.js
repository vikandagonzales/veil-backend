const TABLE_NAME = 'guilds';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('name').notNullable();
    table.string('status').defaultsTo(null);
    table.timestamp('founded').defaultsTo(null);
    table.string('logo').defaultsTo(null);
    table.boolean('archived').defaultsTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};