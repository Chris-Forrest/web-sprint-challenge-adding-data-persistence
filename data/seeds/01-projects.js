
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { name:"take care of mom", description:"medications,cooking,cleaning"},
        { name:"pass Lambda School", description:"precourse work, assignments, lectures, learn"},
        { name:"go to sleep", description:"take cbd oil take 5mg of melatonin"}
      ]);
    });
};
