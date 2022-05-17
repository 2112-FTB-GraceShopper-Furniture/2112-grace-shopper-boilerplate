const client = require('./client');
console.log("client",client)
const { createProduct } = require("./models/products");

//  const bcrypt = require('bcrypt');

// const 
//   createUser = require("./models/user");
  
const {
  productsToAdd,
  // usersToCreate,
} = require("./seedData");

async function dropTables() {
  try {
    // drop tables in correct order
    console.log("Starting to drop tables.. ")
    await client.query(`
   
    DROP TABLE IF EXISTS products;
    

    `);
    console.log('Finished dropping tables!');
	} catch (error) {
		console.error('Error dropping tables!');
		throw error;
	}
}

async function createTables() {
  try {
    await client.query(`
     

      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(255) NOT NULL,
        stock INTEGER NOT NULL,
        price INTEGER NOT NULL,
        category VARCHAR(255),
        "reviewStar" INTEGER,
      );

`);

console.log('Finished building tables!');
    
  } catch (error) {
		console.error('Error building tables!');
		throw error;
	}
}
    // build tables in correct order
    
  




async function createInitialProducts() {
  try {
    console.log("Starting to create products...");

    const products = await Promise.all(productsToAdd.map(createProduct));

    console.log("products created:");
    console.log(products);

    console.log("Finished creating products!");
  } catch (error) {
    console.error("Error creating products!");
    throw error;
  }
}

// async function createInitialOrders() {
//   console.log("Starting to create orders...");
//   try {
//     const users = await Promise.all(ordersToCreate.map(createOrders));

//     console.log("Users created:");
//     console.log(users);
//     console.log("Finished creating users!");
//   } catch (error) {
//     console.error("Error creating users!");
//     throw error;
//   }
// }

// async function createInitialCarts() {
//   try {
//     console.log("starting to create the cart...");
//     // const [ user1, user2, user3 ] = await  AddFunctionThatRetrievesUserInfo
//     // const [ product1, product2, product3  ] = await AddFunctionThatRetrievesProductInfo
//     // const [ order1, order2, order3  ] = await AddFunctionThatRetrievesOrderInfo -orderId needs to match userinfo.
//     const carts = await Promise.all(cartToCreate.map(createCarts));

//     console.log("Carts created:");
//     console.log("Finished creating carts!");
//   } catch (error) {
//     console.error("Error creating carts!");
//     throw error;
//   }
// }

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    // await createInitialUsers();
    await createInitialProducts();
    // await createInitialOrders();
    // await createInitialCarts();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}

module.exports = {
  rebuildDB,
};
