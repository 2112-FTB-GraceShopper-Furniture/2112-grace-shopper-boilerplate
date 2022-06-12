import axios from 'axios'
export const apiUrl = "";

export const getAllProducts = async () => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/products`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.statusText !== "OK") {
      throw new Error(response.data.message);
    }
    console.log("getAllProducts", response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  let response;
  try {
    console.log("id", productId);
    response = await fetch(`${apiUrl}/api/products/${productId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const product = await response.json();
    console.log(product);
    return product;
  } catch (error) {
    console.log("error in getProductById!");
    throw error;
  }
};

// export const getProductsByCategory = async (category) => {
//   let response;
//   try {
//     console.log("category", category);
//     response = await fetch(`${apiUrl}/api/category/${category}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const products = await response.json();
//     console.log(products)
//     return products;
//   } catch (error) {
//     console.log("error in getProductsByCategory");
//     throw error;
//   }
// };

// console.log(getProductById(1));
