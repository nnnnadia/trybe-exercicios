'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        title: 'O Pequeno Príncipe',
        author: 'Antoine de Saint-exupery',
        pageQuantity: 153,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Pedagogia da Autonomia',
        author: 'Paulo Freire',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Pedagogia do Oprimido',
        author: 'Paulo Freire',
        pageQuantity: 498,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Memorial de Maria Moura',
        author: 'Rachel de Queiroz',
        pageQuantity: 455,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'O Quinze',
        author: 'Rachel de Queiroz',
        pageQuantity: 184,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Tantos Anos',
        author: 'Rachel de Queiroz',
        pageQuantity: 500,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Capitães da Areia',
        author: 'Jorge Amado',
        pageQuantity: 350,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Farda Fardão Camisola de Dormir',
        author: 'Jorge Amado',
        pageQuantity: 249,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Tocaia Grande - a Face Obscura',
        author: 'Jorge Amado',
        pageQuantity: 249,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Mar Morto',
        author: 'Jorge Amado',
        pageQuantity: 260,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Quarto de Despejo - Diário de uma Favelada',
        author: 'Carolina de Jesus',
        pageQuantity: 350,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Casa de Alvenaria - Vol. 1 : Osasco',
        author: 'Carolina de Jesus',
        pageQuantity: 400,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: '1984',
        author: 'George Orwell',
        pageQuantity: 266,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Revolução dos Bichos',
        author: 'George Orwell',
        pageQuantity: 275,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Hora da Estrela',
        author: 'Clarice Lispector',
        pageQuantity: 400,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Laços de Família',
        author: 'Clarice Lispector',
        pageQuantity: 240,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Legião Estrangeira',
        author: 'Clarice Lispector',
        pageQuantity: 150,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Paixão Segundo G.H.',
        author: 'Clarice Lispector',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Grande Sertão: Veredas',
        author: 'João Guimarães Rosa',
        pageQuantity: 409,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
