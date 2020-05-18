module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      User_ID: {
        type: DataTypes.STRING,
        allowNull: false
      },
      First_Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Last_Name: {
        type: DataTypes.STRING,
        allowNull: false
      },   
      City: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Zip_Code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Skill_1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Skill_2: {
        type: DataTypes.STRING,
        allowNull: false
      },   
      Bio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Profile;
  };
  