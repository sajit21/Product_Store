import { sql } from "../config/db.js"; //import the database connection

export const getAllProducts = async (req, res) => {
  try {
    const getProduct =
      await sql`SELECT * FROM products ORDER BY created_at DESC`;
    console.log("fetched producsts", getAllProducts);
    return res.status(200).json({
      success: true,
      data: getProduct,
    });
  } catch (error) {
    console.log("cannot fetched all products");
    res
      .status(500)
      .json({ success: false, message: "cannot fetched all products" });
  }
};

export const createAllProducts = async (req, res) => {
  const { name, image, Price } = req.body;

  if (!name || !image || !Price) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const createProducts =
      await sql`INSERT INTO products (name,image,Price) VALUES (${name},${image},${Price})
        Returning * `

    console.lof("created products", createProducts);
    return res.status(201).json({
      message: "Product created successfully",
      data: createProducts,
    });
  } catch (error) {
    console.log("cannot create product");
    res.status(500).json({
      message: "cannot create product",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await sql`SELECT * FROM products WHERE id=${id}`;
    res.status(200).json({success:true, data:getProductById[0]})
  } catch (error) {
    console.log("Error occurred", error);
    res.status(500).json({
      success: false,
      message: "Error occurred",
    });
  }
};

export const updateProducts = async (req, res) => {
   try{  
    const {id} =req.params;
    const {name,image,Price}=req.body;
    const updateProductById= await sql `
    UPDATE products
    SET name=${name}, image=${image}, Price=${Price}
    WHERE id=${id} RETURNING *` 

    if(updateProductById.length===0){
        return res.status(404).json({
            success:false,
            message:"Product not found",
        });
    }
    console.log("updated prodcts", updateProductById);
    return res.status(200).json({
      message: "Product updated successfully",
      data: updateProductById,
    });
    }

catch(error){
    console.log("Error occurred", error);
    res.status(500).json({
      success: false,
      message: "Error occurred",
    });
  }

}

export const deleteProducts = async (req, res) => {
    try {
        const {id}  = req.params;
        const deleteProductById= await sql `DELETE FROM products 
        WHERE id=${id}
           RETURNING *`
           if(deleteProductById.length===0){
            return res.status(404).json({
                success:false,
                message:"Product not found",
            });}

        console.log("deleted products", deleteProductById);
        return req.status(200).json({
            success:true,
            data: deleteProductById,
        });
    } catch (error) {
        console.log("Error occurred", error);
        res.status(500).json({
            success: false,
            message: "Error occurred",
        });
        
    }
};
