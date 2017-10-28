module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('organization', {
  	organizationName: {
  		type: DataTypes.STRING,
  		allowNull: false,
  		validate: {
          notEmpty: true,
      },
  	},
  	address: {
  		type: DataTypes.STRING,
  		allowNull: false,
  		  validate: {
        notEmpty: true,
      },
  	},
  	phone: {
  		type: DataTypes.INTEGER,
  		allowNull: false,
  		validate: {
          notEmpty: true,
      },
  	},
  	organizationType: {
  		type: DataTypes.STRING,
  	},
  	repName: {
  		type: DataTypes.STRING,
  	},
  	repPhone: {
  		type: DataTypes.INTEGER,
  	},
  	repEmail: {
      	type: DataTypes.STRING,
      	allowNull: false,
      	unique: true,
      	validate: {
          notEmpty: true,
          isEmail: true,
      },
  },
});
  return Organization;
};