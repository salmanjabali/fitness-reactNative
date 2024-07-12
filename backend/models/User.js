// models/User.js
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: false, // Disable createdAt and updatedAt
      // If you want to use a different primary key:
      // primaryKey: true,
      // primaryKeyColumnName: 'your_primary_key_column',
    });
  
    return User;
  };
  