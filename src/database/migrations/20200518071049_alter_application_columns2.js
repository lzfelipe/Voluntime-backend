exports.up = async (knex) => { 
    return knex.schema.alterTable('applications', table => {
    
        table.dropColumn('confirmed_by_user')
        table.string("choosen_date").notNullable()
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('applications', table => {
        table.boolean("confirmed_by_user").defaultTo(false)
        table.dropColumn('choosen_date')
})
}