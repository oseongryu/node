const moment = require("moment");

module.exports = function (sequelize, DataTypes) {
  const Contacts = sequelize.define("Contacts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT }
  });

  // 이 아래 작성하세요.

  Contacts.prototype.dateFormat = (date) => moment(date).format("YYYY-MM-DD");

  return Contacts;
};
