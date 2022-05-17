const getSingleProduct = async (productId) => {
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