const SendResponse = require("../../helper/sendResponse");
const {
  createProduct,
  getAllProducts,
  searchProduct,
} = require("../../service/product/ProductService");

module.exports = {
  createProduct: async (req, res) => {
    const newProduct = await createProduct(req.body);
    if (newProduct) {
      SendResponse(
        {
          data: newProduct,
          status: 200,
          message: "product created successfully",
        },

        res
      );
    } else {
      SendResponse(
        {
          status: 400,
          message: "product created faild",
        },

        res
      );
    }
  },

  getAllProducts: async (req, res) => {
    const product = await getAllProducts();
    console.log("product", product);
    SendResponse(
      {
        data: product,
        status: 200,
        message: "product retrieved successfully",
      },

      res
    );
  },
  getProduct: async (req, res) => {
    const product = await getSingleProduct(req.params.id);
    if (product) {
      SendResponse(
        {
          data: product,
          status: 200,
          message: "Product was successfully retrieved",
        },

        res
      );
    }
  },
  searchProduct: async (req, res) => {
    const product = await searchProduct(req.params.key);
    if (product) {
      SendResponse(
        {
          data: product,
          status: 200,
          message: "Product was successfully retrieved",
        },

        res
      );
    }
  },
};
