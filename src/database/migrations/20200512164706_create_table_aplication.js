
exports.up = async (knex) => { 
    return knex.schema.createTable('applications', table => {

    table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

    table.string('cpf').notNullable()
    table.string('rg_picture_name').notNullable()

    table.boolean('confirmed_by_ong').defaultTo(false)
    table.boolean('confirmed_by_user').defaultTo(false)
    

    table.boolean('is_done').defaultTo(false)

    

})
}

exports.down = knex => knex.schema.dropTable('applications')