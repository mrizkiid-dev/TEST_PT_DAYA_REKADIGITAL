import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE customers
        ALTER COLUMN favorite_menu TYPE INT USING favorite_menu::INTEGER;

        ALTER TABLE customers
        ADD CONSTRAINT fk_product
        FOREIGN KEY (favorite_menu)
        REFERENCES products(id);
    `);
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE customers
        ALTER COLUMN favorite_menu TYPE VARCHAR(100);

        ALTER TABLE customers
        DROP CONSTRAINT fk_product;
    `);
}

