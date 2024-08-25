import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE customers
        DROP COLUMN level;

        ALTER TABLE customers
        ADD COLUMN level VARCHAR(20) CHECK (level IN ('warga', 'juragan', 'sultan', 'kolongmerat')) NOT NULL;
    `)
}


export async function down(knex: Knex): Promise<void> {
    return knex.raw(`
        ALTER TABLE customers
        ADD COLUMN level VARCHAR(20) CHECK (level IN ('warga', 'juragan', 'sultan', 'kolongmerat')) NOT NULL;
    `)
}

