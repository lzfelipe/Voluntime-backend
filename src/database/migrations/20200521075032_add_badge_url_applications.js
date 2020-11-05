exports.up = async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.string("badge_url").notNullable()
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.dropColumn("badge_url")
})
}