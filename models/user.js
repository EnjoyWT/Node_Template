module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    taskone:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    tasktwo:{
      type:DataTypes.INTEGER,
      defaultValue:0
    }
  }, {
    freezeTableName: true
  });

  return User;
};
