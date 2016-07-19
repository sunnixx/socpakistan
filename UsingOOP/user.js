var DATA = [];

$('#submit').click(function(){
        var objUser = new user($('#name').val(),$('#userName').val(),$('#password').val());
        DATA.push(objUser);

    });


var user = function(name,userName,pass){
    this.name = name;
    this.userName = userName;
    this.pass = pass;
}

user.prototype.checkLogin = function(userName,pass){
    if(this.userName == userName && this.pass == pass){
        return true;
    }
    else{
        return false;
    }
}

$('#loginSubmit').click(function(){
    for(var i = 0;i<DATA.length;i++){
        var bool = DATA[i].checkLogin($("loginName").val(),$('#loginPass').val());

        if(bool == true){
            alert("Welcome " + DATA[i].name);
        }
    }
});