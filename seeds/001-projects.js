
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Make dinner', project_completed: true},
        { id: 2, project_name: 'Study at Lambda', project_completed: 0},
        { id: 3, project_name: 'Complete personal portfolio', project_completed: false}
      ]);
    });
};
