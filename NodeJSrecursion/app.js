//var q = require("./queue");

function processQueue(queue, index, fn, finish){
    
    // ending condition
	if (index===queue.length){
        finish();
        return;
    }
    
    
	fn(queue[index], function(){
		processQueue(queue, index+1, fn, finish);
	});
}


var arr = ["email1@domain.com","rm2@ddd.com","sdsad@ddsds.com"];

processQueue(arr, 0, processEmail, allDone);




function processEmail(emailID, cb){
    console.log("processEmail called for ",emailID);
    
    setTimeout(function(){
        console.log("work done for", emailID);
        cb();
    },4000);
}


function allDone(){
    console.log("DONE!!");
}