require("dotenv").config();
const client = require('./client');
const { createProduct } = require("./products");
const { singleProduct } = require("./singleProduct");




describe("singleProduct", () => {
    it("creates and returns the new product", async () => {
      
      const product = await createProduct({
        name: "Harstine Leather Sofa",
        description: "The Harstine Leather Sofa features thick arms, which compliment the tufted seat cushions and back cushions",
        stock: 11,
        price: "$78.77",
        reviewStars: 3,
        category: "sofa",
          
      })
      const queriedProduct = await singleProduct(product.id);
      expect(product).toEqual(queriedProduct);
    });
  });