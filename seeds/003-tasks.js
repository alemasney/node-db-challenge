
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'preheat oven', task_completed: true, project_id: 1},
        {id: 2, task_description: 'chop veggies', task_note: 'need 3 cups full', task_completed: false, project_id: 1},
        {id: 3, task_description: 'add pages', task_completed: 0, project_id: 3}
      ]);
    });
};
