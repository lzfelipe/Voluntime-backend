exports.up = async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.increments('id')
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.dropColumn("id")
})
}