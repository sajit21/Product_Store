import { sql } from "../config/db.js"; //import the database connection

export const getAllProducts = async (req, res) => {
  try {
    const getProduct = await sql`SELECT * FROM products ORDER BY created_at DESC`;
    console.log("fetched products", getProduct);
    return res.status(200).json({
      success: true,
      data: getProduct,
    });
  } catch (error) {
    console.log("cannot fetch all products");
    res.status(500).json({ success: false, message: "cannot fetch all products" });
  }
};

export const createAllProducts = async (req, res) => {
  const { name, image, Price } = req.body;

  if (!name || !image || !Price) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  try {
    const createProducts = await sql`INSERT INTO products (name, image, Price) VALUES (${name}, ${image}, ${Price}) Returning *`;
    console.log("created products", createProducts);
    return res.status(201).json({
      message: "Product created successfully",
      data: createProducts,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      message: "An error occurred while creating the product",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await sql`SELECT * FROM products WHERE id=${id}`;
    res.status(200).json({ success: true, data: getProductById[0] });
  } catch (error) {
    console.log("Error occurred", error);
    res.status(500).json({
      success: false,
      message: "Error occurred",
    });
  }
};

export const updateProduct = async (req, res) => {
  
  try {
    const { id } = req.params;
  const { name, price, image } = req.body;

    const updateProduct = await sql`
      UPDATE products
      SET name=${name}, price=${price}, image=${image}
      WHERE id=${id}
      RETURNING *
    `;

    if (updateProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: updateProduct[0] });
  } catch (error) {
    console.log("Error in updateProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await sql`
      DELETE FROM products WHERE id=${id} RETURNING *
    `;

    if (deletedProduct.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({ success: true, data: deletedProduct[0] });
  } catch (error) {
    console.log("Error in deleteProduct function", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};