const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("thoughts", "root", "5078bila", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso!");
} catch (err) {
  console.log(`Não foi possível connectar: ${err}`);
}

module.exports = sequelize;
