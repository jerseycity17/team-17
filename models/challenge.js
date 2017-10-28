module.exports = (sequelize, DataTypes) => {
  const Challenges = sequelize.define('challenges', {
    Name: {
      type: DataTypes.STRING,
    },
    challengesType: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Challenges;
};