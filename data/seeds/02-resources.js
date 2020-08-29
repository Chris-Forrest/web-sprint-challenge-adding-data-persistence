
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources").del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { name:"Refrigerator", description:"medicines on the door of the fridge also food to make meals"},
        { name:"Sink", description:"clean dishes after meal"},
        { name:"Computers", description:"laptop for projects, desktop for pre-course work"},
        { name:"Notes", description:"use a pen, paper and highlighters for taking and outlining notes"},
        { name:"Sleep medications", description:"needed for sleep"},
        { name:"Bed", description:"go to bed"},
      ]);
    });
};
