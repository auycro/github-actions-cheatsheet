const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
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
