const express = require("express");
const router = express.Router();
const { submitForm } = require("./contact.controller");

router.post("/contact", submitForm);

module.exports = router;
