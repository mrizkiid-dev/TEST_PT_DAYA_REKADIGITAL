import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        CREATE TABLE transaction_products (
            id SERIAL PRIMARY KEY,
            transaction_id INT REFERENCES transactions(id) ON DELETE CASCADE,
            product_id INT REFERENCES products(id) ON DELETE CASCADE,
            quantity INT NOT NULL
        );
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        DROP TABLE IF EXISTS transaction_products;
    `);
}

