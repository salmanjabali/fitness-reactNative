// models/Exercise.js
module.exports = (sequelize, DataTypes) => {
    const Exercise = sequelize.define('Exercise', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bodyPart: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instructions: {
        type: DataTypes.JSON, // Store instructions as JSON array
        allowNull: false,
      },
      gifUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      equipment: DataTypes.STRING,
      secondaryMuscles: {
        type: DataTypes.JSON, // Store secondary muscles as JSON array
        allowNull: true,
      },
      target: DataTypes.STRING,
    });
  
    return Exercise;
  };
  