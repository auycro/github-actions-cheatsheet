const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT,
  operatorsAliases: false,

  // pool: {
  //   max: 5,
  //   min: 0,
  //   acquire: 30000,
  //   idle: 10000
  // }
});

const connect = async function(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connect();
