module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define('tag', {
        name: {
            type: Sequelize.CHAR(50),
            unique: true,
            allowNull: false,
            validate: {
                max: {
                    args: 50,
                    msg: 'Tagname should be less than 50 characters.'
                }
            }
        }
    }, {
        timestamps: false
    });

    Tag.associate = function (models) {
        Tag.hasMany(models.tagsinpost);
    }

    return Tag;
}