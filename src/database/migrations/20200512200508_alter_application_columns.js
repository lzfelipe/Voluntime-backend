exports.up = async (knex) => { 
    return knex.schema.alterTable('applications', table => {
    
        table.renameColumn('rg_picture_name', 'rg_front')
        table.string('rg_verse').notNullable()
})
}

exports.down =  async (knex) => { 
    return knex.schema.alterTable('applications', table => {

        table.renameColumn('rg_front', 'rg_picture_name')
        table.dropColumn('rg_verse')
})
}