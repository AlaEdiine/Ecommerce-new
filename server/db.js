const mongoose    = require('mongoose')
// const url = 'mongodb://localhost:27017/newdata'
const url = 'mongodb+srv://alaeddine20182017:ALA9321x@cluster0.noq6yoo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url , 
  {
    useNewUrlParser: true,
     useUnifiedTopology: true
  
    }).then(con =>{
  
   if (con){
    console.log('Succed MongoDB Atals Connected in 0.005 ms')
   }
   else {
    console.log("Error connected MongoDB")
   }
    
    })


