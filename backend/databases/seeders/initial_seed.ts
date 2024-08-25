import db from '../../src/configs/db.config';

const seed = async () => {
  const client = await db.connect()
  try {
    await client.query(`BEGIN`);

    // reset table
    await client.query(`
        TRUNCATE TABLE products RESTART IDENTITY CASCADE;
        TRUNCATE TABLE customers RESTART IDENTITY CASCADE;
        TRUNCATE TABLE transactions RESTART IDENTITY CASCADE;
        TRUNCATE TABLE transaction_products RESTART IDENTITY CASCADE;
    `);

    // inset products
    await client.query(`
        INSERT INTO products (name, price, stock) VALUES
        ('Chicken & Ribs Combo', 100001, 100),
        ('Surf $ Turf Gift Basket', 100002, 100),
        ('Fried Chicken Dinne', 100003, 100),
        ('Dark & stormy', 100004, 100),
        ('Shaking Beef Tri-Tip', 100005, 100),
        ('BBQ Rib Dinner', 100006, 100),
        ('Baso', 100007, 100),
        ('Sate', 100008, 100),
        ('Nasi Goreng', 100009, 100),
        ('Mie Goreng', 100010, 100);
    `)

    // inset customers
    await client.query(`
      INSERT INTO customers (name, level, favorite_menu) VALUES
      ('Odis Rhinehart', 'warga', 1 ),
      ('Kris Roher', 'warga', 2 ),
      ('Serenity Fisher', 'juragan', 3 ),
      ('Brooklyn Warren', 'sultan', 2 ),
      ('Franco Delort', 'juragan', 1 ),
      ('Saul Geoghegan', 'juragan', 2 ),
      ('Alfredo Vetrovs', 'juragan', 4 ),
      ('Cristofer Verovs', 'kolongmerat', 5),
      ('Calvin Steward', 'warga', 6 );
    `)

  // insert transaction
  await client.query(`
    INSERT INTO transactions (customer_id, total_price) VALUES
    ('1', 100000),
    ('2', 200000),
    ('3', 300000),
    ('4', 400000),
    ('5', 500000),
    ('1', 600000),
    ('2', 700000),
    ('2', 800000),
    ('6', 900000),
    ('7', 100000);
  `)

  await client.query(`
    INSERT INTO transaction_products (transaction_id, product_id, quantity) VALUES
    ('1', 1, 2),
    ('2', 2, 1),
    ('3', 3, 4),
    ('4', 4, 3),
    ('5', 5, 2),
    ('1', 3, 1),
    ('2', 2, 4),
    ('2', 1, 6),
    ('6', 2, 1),
    ('7', 6, 2);
  `)

  await client.query(`COMMIT`);

    console.log('Seeding completed.');
  } catch (error) {
    console.error('Seeding failed:', error);
    await client.query(`ROLLBACK`);
  } finally {
    client.release();
  }
};

seed();