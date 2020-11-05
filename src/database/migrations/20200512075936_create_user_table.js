
exports.up = async (knex) => { 
    return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('full_name').notNullable()
    table.string('birth_date').notNullable()
    table.string('cep').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    
    table.string('background_field').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
})
}

exports.down = knex => knex.schema.dropTable('users')