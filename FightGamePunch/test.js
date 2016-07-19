function orderFood(customerName, foodItem, callback){
    setTimeout(function(){
        callback(foodItem);
    },5000);
    
}



orderFood("Sumair","Zinger", function(foodItem){
    console.log("Mje Milgya --Sumair");
});

console.log("sumair order complete");

orderFood("Vijdan","Panini",function(foodItem){
    console.log("Mje Milgya --Vijdan");
});



console.log("vijdan order complete");