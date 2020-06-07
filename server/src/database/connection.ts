import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },

    pool: { min: 0, max: 50 },
    useNullAsDefault: true,
});

export default connection;

//  Migrations = historico do banco de dados

//  create table points
//  create table users