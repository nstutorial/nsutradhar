const express = require("express");
const { getUser, addUser, editUser, deleteUser } = require("../controllers/userCtrl");


//router from router object
const router = express.Router();

//routes
router.get("/",getUser);
router.post("/add-user",addUser);
router.put("/edit-user/:id",editUser); // pass id, now receive this id in userCtrl
router.delete("/delete-user/:id",deleteUser);

// export
module.exports = router;