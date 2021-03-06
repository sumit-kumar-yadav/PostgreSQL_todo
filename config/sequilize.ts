{
    const { Sequelize } = require('sequelize');

    const sequelize = new Sequelize('todoApp', process.env.postgeSQLuser, process.env.postgeSQLpassword, {
        host: 'localhost',
        dialect: 'postgres'
    });


    (async () => {
        try {
            await sequelize.authenticate();
            console.log('DB Connection has been established successfully.');
            // Create table if does not exist
            await sequelize.sync();
            // await sequelize.sync({ force: true });
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    })()

    module.exports = {
        sequelize,
    };
}