
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

  .createTable("tasks", (tbl) => {
    tbl.increments()
    tbl.text("description").notNullable()
    tbl.text("notes")
    tbl.boolean("completed").defaultTo(false)
    tbl.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
  })



};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects")
};
