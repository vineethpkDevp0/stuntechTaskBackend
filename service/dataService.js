const db=require('./db')

const details=()=>{
    return db.User.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    data:result
                }
            }else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No product found'
                 
                }
            }
        }
    )
}




const search=(test)=>{
    return db.User.find( { 'gigname' : { '$regex' : test, '$options' : 'i' } } ).then((ref)=>{
        console.log("ref"+ref);
        return ref
    })
}

module.exports={
    details,
    search
}