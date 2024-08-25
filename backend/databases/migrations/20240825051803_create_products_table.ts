import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        CREATE TABLE products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          price DECIMAL(10, 2) NOT NULL
        );`
    );
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        DROP TABLE IF EXISTS products;
      `);
}

