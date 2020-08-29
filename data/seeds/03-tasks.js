
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks").del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { project_id: 1, description: "get medications ready in proper doses", notes:"also get a beverage to help swallow meds"},
        { project_id: 1, description: "cook something good", notes:"also must be low in fat,salt and sugar"},
        { project_id: 1, description: "wash dishes,sweep,vaccum", notes:"general household cleaning as much as can be done"},
        { project_id: 2, description: "be awesome at Lambda", notes:"use notes and computers to research as well as ask for help"},
        { project_id: 3, description: "take sleeping meds", notes:"remember to take meds or no sleep"},
        { project_id: 3, description: "go to bed", notes:"lay down in bed go to sleep eventually"},
      ]);
    });
};
