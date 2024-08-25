import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        CREATE TABLE transactions (
        id SERIAL PRIMARY KEY,
        customer_id INT REFERENCES customers(id) ON DELETE CASCADE,
        total_price DECIMAL(10, 2) NOT NULL
        );
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        DROP TABLE IF EXISTS transactions;
    `);
    // DROP TABLE IF EXISTS transaction_products;
}

