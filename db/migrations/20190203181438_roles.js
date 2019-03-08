const TABLE_NAME = 'roles';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.integer('guild_id').notNullable().references('guilds.id');
    table.string('name').notNullable();
    table.integer('rank').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};