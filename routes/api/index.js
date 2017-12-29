const router = require("express").Router();
const itemRoutes = require("./items");
const cartRoutes = require("./carts");
const userRoutes = require("./users");

router.use("/items", itemRoutes);
router.use("/carts", cartRoutes);
router.use("/users", userRoutes);

module.exports = router;