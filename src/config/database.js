module.exports = {
  dialect: 'postgres',
  port: '25432',
  host: 'localhost',
  username: 'eneasmarques',
  password: 'go123',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true, // utilizar undeline nos campos das tabelas
    underscoredAll: true // utilizar underline nos nomes das tabelas
  }
}
