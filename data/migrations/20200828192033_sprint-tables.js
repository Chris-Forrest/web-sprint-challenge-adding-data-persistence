
exports.up = function(knex) {
  return knex.schema.createTable("projects", (tbl) => {
      tbl.increments() //this makes the id unique not null and required
      tbl.text("name",220).notNullable()
      tbl.text("description")
      tbl.boolean("completed").defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
};
