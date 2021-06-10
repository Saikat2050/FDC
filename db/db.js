const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://santra2050:Abcd1234@cluster0.4yhpu.mongodb.net/FDC?retryWrites=true&w=majority';
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
console.log('connected to db');
})
.catch((err)=>{
console.log(err);
});
