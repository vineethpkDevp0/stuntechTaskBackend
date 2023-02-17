const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/form',()=>{
    console.log("mongodb connected success...");
})

const User=mongoose.model('User',{
    budget:String,
    date:String,
    gigname:String

})

module.exports={
    User
}