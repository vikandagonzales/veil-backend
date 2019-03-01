const TABLE_NAME = 'users';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.integer('role_id').notNullable().references('roles.id');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.timestamp('birthday').notNullable();
    table.string('location').defaultsTo('');
    table.string('timezone').defaultsTo('');
    table.text('bio').defaultsTo('');
    table.string('photo').defaultsTo('');
    table.boolean('archived').defaultsTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};