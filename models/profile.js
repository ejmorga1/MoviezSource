module.exports = function (sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {

        // user_id: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false
        // },

        media_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        media_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // movie_tv: {
        //   type: DataTypes.BOOLEAN,
        //   allowNull: false
        // },

        // favorited: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: true
        // },

        wish_list: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

        watched_list: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },

        // user_rating: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
    });

    Profile.associate = function (models) {
        // We're saying that a Profile should belong to a User
        // A Profile can't be created without an User due to the foreign key constraint
        Profile.belongsTo(models.User, {
            foreignKey: 'email'
        });
    };

    return Profile;
};