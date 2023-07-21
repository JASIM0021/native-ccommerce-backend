const ProductController = require("../controller/product/ProductController");

const router = require("express").Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProduct);
router.get("/search/:key", ProductController.searchProduct);
router.post("/", ProductController.createProduct);

module.exports = router;
