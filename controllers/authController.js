const alert = require('alert');
const Data = require('../module/emailschema');
const transp = require('../config/keys');

const home = (req,res)=>{
    res.render('home',{title: 'Home'})
};
const signup = async (req,res)=>{
    const email = req.body.email;
    const usedemail = await Data.findOne({email});
    if(!usedemail) {
      const data = new Data(req.body);
    data.save()
    .then((result)=>{
    res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    else{
        alert("Email ID is already exist");
        res.redirect('/');
    }
    };
    const login = async (req,res)=>{
        const {email, password}= req.body;
       const check= await Data.findOne({email})
       if(check){
         if(check.password===password)
         res.redirect('/newhomefcuk554');
         else{
          alert('email and password mismatch');
          res.redirect('/');
             }
       }
       else{
    alert('email and password mismatch');
    res.redirect('/');
       }
        };
const login_page = (req,res)=>{
    res.render('log_in', {title: 'Log in'});
    };
const sign_up=(req,res)=>{
    res.render('signup', {title: 'Sign up'});
    };
const forget = async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const saikat=await Data.findOne({email});
    if(saikat) {
      const link = `http://localhost:3000/reset/${saikat._id}/${password}`;
      var mailOptions ={
        from:'csecec.1802177@gmail.com',
        to:`${saikat.email}`,
        subject:'Reset password link',
        text: link
      };
      transp.transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
          console.log(err);
        }
        else{
          console.log('Email sent');
        }
      });
      res.redirect('/');
    }
    else{
      alert('email not found');
      res.redirect('/');
    }
  };
const reset = (req,res)=>{
    const id=req.params.id;
    const pass=req.params.pass;
    Data.findByIdAndUpdate(id, { password: `${pass}` },
    function (err, docs) {
if (err){
console.log(err)
}
else{
console.log("Updated User : ", docs);
}
});
  }; 
const reset_pass = async (req,res)=>{
    const email = req.body.email;
    const ut = req.body.password;
    let doct=await Data.findOneAndUpdate({email},{ password: ut},{ new: true});
    res.send(doct.password);
  };
const forget_page = (req,res)=>{
    res.render('forget');
  };
const google_auth = (req, res)=> { 
  res.redirect('/newhomefcuk554');
  };


module.exports ={
    home,
    signup,
    login,
    login_page,
    sign_up,
    forget,
    reset,
    reset_pass,
    forget_page,
    google_auth
};