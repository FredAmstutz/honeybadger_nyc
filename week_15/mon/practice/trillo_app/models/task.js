'use strict';
module.exports = (sequelize, DataTypes) => {
  var task = sequelize.define('task', {
    description: DataTypes.STRING,
    is_done: DataTypes.BOOLEAN,
    is_deleted: DataTypes.BOOLEAN
  }, {});
  task.associate = function(models) {
    // associations can be defined here
  };
  return task;
};