const keys = require('../config/keys');
const PUBLISHABLE_KEY=keys.stripe.PUBLISHABLE_KEY;
const SECRET_KEY=keys.stripe.SECRET_KEY;
const stripe=require('stripe')(SECRET_KEY);

const payment =(req,res)=>{
    res.render('payment',{key:PUBLISHABLE_KEY});
    };
const stripe_pay = (req,res)=>{
    stripe.customers.create({
        email:req.body.stripeEmail,
        source:req.body.stripeToken,
    })
    .then((customer)=>{
        return stripe.charges.create({
            amount:2000,
            description:'Feedback And Details About Companies',
            currency:'inr',
            customer:customer.id
     })
    })
    .then((charge)=>{
        res.render('company',{title:'company'});
    })
    .catch((err)=>{
        res.send(err);
    })
    };


module.exports = {
    stripe_pay,
    payment
};
