'use strict';
module.exports = (sequelize, DataTypes) => {
  var Weapon = sequelize.define('Weapon', {
    name: DataTypes.STRING,
    material: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER
  }, {});
  Weapon.associate = function(models) {
    // associations can be defined here
  };
  return Weapon;
};