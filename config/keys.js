const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'csecec.1802177@gmail.com',
      pass:'rishika@0109'
    }
  });
module.exports={
    google: {
        clientID: '1019662458404-jlm8m97e1hh48e7gal7tteedgri017tv.apps.googleusercontent.com',
        clientSecret: 'xz5JuZgA_Kg5s7oQFPJ6X94X'
    },
    stripe:{
        
        PUBLISHABLE_KEY: 'pk_test_51IyWvWSBus84JHp3FF2d9wrzVUVoNQpcLvMqL06ibfh7yVgcK7sJ7Txxl9l7sG8wsXBpsuve988GFvhrSdkXjtvs00zOhzuDiZ',
        SECRET_KEY: 'sk_test_51IyWvWSBus84JHp3yx38LYmP99jRqag35aakEBCFq46vMyGgdmSgdjIBJh93ncuNHyE69hdkQmQ8OBOGbaUIkDoE00ShqtMkDz'
    },
    transporter
};