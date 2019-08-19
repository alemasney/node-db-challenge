
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128)
            .unique()
            .notNullable();
        tbl.boolean('project_completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128)
            .notNullable();
        tbl.string('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description')
            .notNullable();
        tbl.string('task_note');
        tbl.boolean('task_completed')
            .notNullable()
            .defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects');
    })
};

exports.down = function(knex) {
  return (knex.schema    
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects'));
};
