
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Plummer', resource_description: 'certified'},
        {id: 2, resource_name: 'Welder'},
        {id: 3, resource_name: 'Accountant', resource_description: 'the best you can buy'}
      ]);
    });
};
