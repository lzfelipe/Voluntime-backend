exports.up = async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.string("ong_id")
        table.string("ong_name")
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.dropColumn("ong_id")
        table.dropColumn("ong_name")
})
}