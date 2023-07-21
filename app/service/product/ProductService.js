const TryCatch = require("../../helper/Trycatch");
const Product = require("../../model/Product");

module.exports = {
  createProduct: async (data) => {
    try {
      const result = new Product(data);
      await result.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  getAllProducts: async () => {
    try {
      const result = await Product.find().sort({ createdAt: -1 });
      console.log("result", result);

      return result;
    } catch (error) {}
  },
  getSingleProduct: async (id) => {
    try {
      const result = await Product.findById(id);
      return result;
    } catch (error) {}
  },
  searchProduct: async (query) => {
    try {
      const result = await Product.aggregate([
        [
          {
            $search: {
              index: "furnitures",
              text: {
                query: query,
                path: {
                  wildcard: "*",
                },
              },
            },
          },
        ],
      ]);
      console.log("result", result);
      return result;
    } catch (error) {}
  },
};
