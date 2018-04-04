'use strict';
module.exports = (sequelize, DataTypes) => {
  var tweed = sequelize.define('tweed', {
    content: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});
  tweed.associate = function(models) {
    // associations can be defined here
  };
  return tweed;
};