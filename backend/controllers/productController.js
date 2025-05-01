import { sql } from "../config/db.js";

export const createProducts = async (req, res) => {
    try {
      const { Name, Description, Price, Image } = req.body;
  
  
      if (!Name || !Price || !Description || !Image) {
        return res
          .status(400)
          .json({ success: false, message: "all field are required" });
      }
  
      const newProduct = await sql`
        INSERT INTO Product (Name, Description, Price, Image)
        VALUES (${Name}, ${Description}, ${Price}, ${Image})
        RETURNING *;
      `;
  
  
      res.status(200).json({ success: true, data: newProduct[0] });
    } catch (error) {
      console.log("Something is wrong during insert:", error.message);
      res.status(500).json({ success: false, message: "product not created" });
    }
  };
  


export const getProducts = async (req, res) => {
  const { id } = req.params;
  try {
    // const {Name, Image, Price}=req.body;

    const newProduct = await sql`select * from Product where id=${id}`;
    res.status(200).json({ success: true, data: newProduct[0] });
  } catch (error) {
    console.log("something went wrong", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const getAllProducts= async(req,res)=>{
  try {
    const newProduct=await sql`select * from product`;
    res.status(201).json({success:true,data:newProduct})
    
  } catch (error) {
    console.log("something went wrong",error.message)
    res.status(500).json({sucsess:false, message:"internal server error"})
    
  }
}

export const updateProduct=async(req,res)=>{
  const {id}=req.params;
  const {Name,Image,Description,Price}=req.body;
  try {
   const uProduct=await sql` UPDATE product 
    SET Name=${Name}, Price=${Price}, Description=${Description},Image=${Image}
    WHERE id=${id}  
    Returning * 
    `;
    res.status(201).json({success:true,data:uProduct[0]})


    
  } catch (error) {
    console.log("something went wrong",error.message)
    res.status(500).json({sucsess:false, message:"internal server error"})
        
  }
}

export const  deleteProduct=async(req,res)=>{
  const {id}=req.params;
  try {
    const dProduct= await sql`DELETE from Product where id=${id} Returning *`;
    res.status(201).json({success:true,data:dProduct[0]})

    
  } catch (error) {
    console.log("something went wrong",error.message)
    res.status(500).json({sucsess:false, message:"internal server error"})
     
    
  }
}





