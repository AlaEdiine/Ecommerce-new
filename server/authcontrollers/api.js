const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY)

//TODO: payment
module.exports.payment = async (req, res) => {
  const products = req.body
  console.log(products);
  try{
    const lineitems = products.map((pro)=>({
      price_data:{
        currency:"USD",
        product_data:{
          name: pro.name,
        },
        unit_amount: pro.price * 100,
      },
      quantity : pro.Qte
    }))
  console.log(lineitems);
  
  const session = await stripe.checkout.sessions.create({
      payment_method_types : ['card'],
      line_items: lineitems,
      mode:"payment",
      success_url: 'http://localhost:3000/sucess',
      cancel_url:'http://localhost:3000/cancel'
    })
    res.json({url:session.url})
  } catch (error){
res.status(500).json({error:error.message})
  }
 
  
  }
