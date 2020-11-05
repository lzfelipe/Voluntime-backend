
exports.up = async (knex) => { 
    return knex.schema.alterTable('users', table => {
  
    table.string('background_field').alter()
})
}

exports.down = knex => table.string('background_field').notNullable()