var DATA = [];

$('#submit').click(function(){
        var sumair = new user($('#name').val(),$('#userName').val(),$('#password').val(),100);
        DATA.push(sumair);
        sumair.player(sumair.name,sumair.health);
    });


var user = function(name,userName,pass,health){
    this.name = name;
    this.userName = userName;
    this.pass = pass;
    this.health = health;
}

user.prototype.checkLogin = function(userName,pass){
    if(this.userName == userName && this.pass == pass){
        return true;
    }
    else{
        return false;
    }
}

user.prototype.player = function(name,health){
    $('#container').append('</br>'+this.name + " has health at" + this.health);
}

user.prototype.punch = function(name,health){
    if(this.name == name){
        $('#fight').append('</br>'+this.name + " Looses health" + this.health-2)
    }
}
// $('#loginSubmit').click(function(){
//     for(var i = 0;i<DATA.length;i++){
//         var bool = DATA[i].checkLogin($("loginName").val(),$('#loginPass').val());

//         if(bool == true){
//             alert("Welcome " + DATA[i].name);
//         }
//     }
// });

