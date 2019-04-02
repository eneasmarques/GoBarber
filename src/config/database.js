module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'eneasmarques',
  password: 'docker',
  database: 'gobarber',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true, // utilizar undeline nos campos das tabelas
    underscoredAll: true // utilizar underline nos nomes das tabelas
  }
}
