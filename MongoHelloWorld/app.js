var monk = require("monk");
var db = monk('localhost/sumair');
var users = db.get("users");

var emails = db.get("emails");



users.insert({ name : "akif" , age: 10, gender: "f"}, function (err, doc) {
    if(err) return done(err);
    console.log("done",err,doc);
});


// users.findOne({:"m"}, function(err, doc){
//     if (!err)
//         console.log(doc);
//     else
//         console.log("errrr",err);
// })


// app.get("/getMyEmails",function(req,res){
//    if (req.user){
//        var meriEmail = req.user.email;
//        users.findOne({email: meriEmail}, function(err, doc){
//            var userObject = doc;
//            res.send(userObject.emails);
           
           
//        });
//    } 
// });



/*
users.find({name:"nooh"},{}, function(err, docs){
    for (var i in docs){
        emails.findOne({email:docs[i].email},function(err, doc){
            //////
            var userelement = docs[i];
            var emaillist = doc;
            //process
            userelement.emails = emaillist;
            res.send(userelement);
            
        })
    }
});
*/