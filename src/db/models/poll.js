"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Poll extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Poll.init(
    {
      messageID: DataTypes.STRING,
      channel: DataTypes.STRING,
      title: DataTypes.STRING,
      question: DataTypes.STRING,
      answers: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue("answers").split(";");
        },
        set(val) {
          this.setDataValue("answers", val.join(";"));
        },
      },
    },
    {
      sequelize,
      modelName: "Poll",
    }
  );
  return Poll;
};
