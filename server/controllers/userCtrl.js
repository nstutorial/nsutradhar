const users = require("../models/userModel");
// GET ALL USER
const getUser =async(req,res)=>{
    try {
        const user =   await users.find()
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
    }
        
}
// ADD USER
const addUser = async(req,res)=>{
    const {fullname,username, password} =req.body;
    if (!username || !password){
        return res.status(422).json({
            error: "Plz fill all field from server side"
        })
    }
    const user = await users.findOne({username});
    
    if (user){
        /*res.status(200).json(user);*/
        return res.status(201).json({
            /*user*/
            message:`username already exist ${user}`
        })
    }
    
    try {
       const newUser = new users({
        fullname, username, password
       });
      const thisUser = await newUser.save();

        res.status(200).json(thisUser/*{
            success:true,
            message:"This is add usr post reques"
        }*/);
    } catch (error) {
        console.log(error);
    }
}
// EDIT USER
const editUser =async(req,res)=>{
    try {
        const user = await users.findByIdAndUpdate(req.params.id, 
          req.body, { new: true, runValidators: true })
          console.log(user);
        if (!user) {
          return res.status(404).send({ message: 'You do not seem to be registered' })
        }
       
        res.status(201).send(user)
      } catch (error) {
        res.status(400).send(error)
      }
  }


//DELETE USER
const deleteUser =async(req,res)=>{
    const user = await users.findByIdAndDelete(req.params.id); 
    if(!user){
        return res.send("user not found")
    }   
    try {
        res.status(201).json({
            message:  `${user.username} User is deleted successfully!`
        })
    } catch (error) {
        console.log(error);
    }
 
 }
 



module.exports = {getUser,addUser,editUser,deleteUser};