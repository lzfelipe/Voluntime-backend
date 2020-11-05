exports.up = async (knex) => { 
    return knex.schema.alterTable('users', table => {
  
    table.string('badges')
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('users', table => {
        table.dropColumn('badges')
})
}