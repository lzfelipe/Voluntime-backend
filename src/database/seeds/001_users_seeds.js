
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          full_name: 'rowValue1', 
          birth_date: 'rowValue1', 
          cep: 'rowValue1', 
          email: 'rowValue1', 
          password: 'rowValue1',
          background_field: ""
        },

        {
          full_name: 'rowValue2', 
          birth_date: 'rowValue2', 
          cep: 'rowValue2', 
          email: 'rowValue2', 
          password: 'rowValue2',
          background_field: "Um teste de background field"
        },
      ]);
    });
};
