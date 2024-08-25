import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE products
        ADD COLUMN stock BIGINT;
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE products
        DROP COLUMN stock;
    `);
}

