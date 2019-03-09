const TABLE_NAME = 'roles';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments().unique();
    table.integer('guild_id').notNullable().references('guilds.id');
    table.string('name').notNullable().unique();
    table.integer('rank').notNullable().unique();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};