module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      User_ID: {
        type: DataTypes.STRING
      },
      First_Name: {
        type: DataTypes.STRING
      },
      Last_Name: {
        type: DataTypes.STRING
      },   
      City: {
        type: DataTypes.STRING
      },
      Zip_Code: {
        type: DataTypes.STRING
      },
      Skill_1: {
        type: DataTypes.STRING
      },
      Skill_2: {
        type: DataTypes.STRING
      },   
      Bio: {
        type: DataTypes.STRING
      }
    });
    return Profile;
  };
  