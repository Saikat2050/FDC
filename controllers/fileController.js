const db = require('../db/db');
const Feed = require('../module/schema');
const Cv = require('../module/resume');
const alert = require('alert');


const feed_back = (req,res)=>{
    res.render('feedback', {title: 'feedback'});
    };
const add_feed = (req,res)=>{
    const feed=new Feed(req.body);
    feed.save()
    .then((viva)=>{
      res.redirect('/newhomefcuk554');
            })
            .catch((err)=>{
              console.log(err);
            })
  };
const submit_feed = (req,res)=>{
    const compa= req.params.name;
    Feed.find({company:compa})
    .then((rishit)=>{
    res.render('a',{title:'compa',rishit})
    })
          };
const new_home = (req,res)=>{
    res.render('newhome', {title: 'Home'});
    };
const apply = (req,res)=>{
    res.render('apply',{title: 'Fill form'})
    };
const resume = (req, res, next)=> {
    const cv = new Cv(req.body);
    if(req.file) {
      cv.avatar = req.file.path;
    }
    cv.save()
    .then((result)=>{
      console.log('data saved');
      alert('Succesfully Applied');
      res.render('company',{title:'company'});
    })
    .catch((err)=>{
      console.log(err);
    });
  };
const c_xyz = (req,res)=>{
    res.render('xyz', {title: 'XYZ COMPANY'});
    };
const c_abc = (req,res)=>{
    res.render('abc', {title: 'ABC company'});
    };
const c_sr = (req,res)=>{
    res.render('sr', {title: 'SR company'});
    };


module.exports = {
    feed_back,
    add_feed,
    submit_feed,
    new_home,
    apply, 
    resume,
    c_xyz,
    c_abc,
    c_sr
};