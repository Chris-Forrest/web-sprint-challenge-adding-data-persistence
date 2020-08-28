
exports.up = function(knex) {
  return knex.schema.createTable("projects", (tbl) => {
      tbl.increments() //this makes the id unique not null and required
      tbl.text("name",220).notNullable()
      tbl.text("description")
      tbl.boolean("completed").defaultTo(false)
  })

  .createTable("resources", (tbl) => {
    tbl.increments()
    tbl.text("name",220).unique().notNullable()
    tbl.text("description")
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
