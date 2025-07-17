module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "admin"
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

  return Admin;
};
