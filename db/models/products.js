const client = require('../client')

async function createProduct({
    name,
    description,
    stock,
    price,
    reviewstars,
    category,
    img
  }) {
    try {
      const {
        rows: [product],
      } = await client.query(
        `
                  INSERT INTO products(name, description, stock, price, reviewstars, category)
                  VALUES ($1, $2, $3, $4, $5, $6)
                  ON CONFLICT(name) DO NOTHING
                  RETURNING *;
              `,
        [name, description, stock, price, reviewstars, category]
      );
      return product;
    } catch (error) {
      throw error;
    }
  }
  

const getAllProducts = async() => {
    try {
        const {rows : products} = await client.query(
            `SELECT * from products`
        ) ;
        return products;
    } catch(error) {
        throw error;
    }
}

const singleProduct = async (productId) => {
	try {
		const { rows: [ product ] } = await client.query(
			`
            SELECT *
                FROM products
                WHERE id=$1;
            `,
			[ productId ]
		);

		return product;
	} catch (error) {
		throw error;
	}
};

module.exports = {
    singleProduct,
    getAllProducts,
    createProduct
}