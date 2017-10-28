module.exports = (sequelize, DataTypes) => {
  const Organizations = sequelize.define('Polls', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  });

  return Organizations;
};