const express = require("express");
const router = express();

const routesUser = require("./routesUser");
const routesProduct = require("./routesProduct");
const routesCategory = require("./routesCategory");

router.use("/users", routesUser);
router.use("/products", routesProduct);
router.use("/categories", routesCategory);

module.exports = router;
