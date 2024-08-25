import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        CREATE TABLE customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        level VARCHAR(20) CHECK (level IN ('warga', 'juaragan', 'sultan', 'kolongmerat')) NOT NULL,
        favorite_menu VARCHAR(100),
        delete BOOLEAN DEFAULT FALSE
        );
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`DROP TABLE IF EXISTS customers;`);
}

