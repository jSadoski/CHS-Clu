"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Polls", [
      {
        channel: "792903691543248923",
        title: "Babys first poll",
        question: "Howd I do?",
        answers: "Well you didnt write any answers.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Polls", null, {});
  },
};
