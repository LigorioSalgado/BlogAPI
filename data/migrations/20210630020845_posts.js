
exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table){
            table.increments()
            table.string('title', 200)
            table.text('body','longtext')
            table.integer('user_id').notNullable().references('id').inTable('users').onDelete('cascade')
            table.string('category', 100)
            table.timestamps() 
  })
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('posts')
};
