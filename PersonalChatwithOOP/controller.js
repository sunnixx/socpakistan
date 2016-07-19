var constructor = function(){
    var objNetwork = new Network();

    objNetwork.getAll();

    $("#fsubmit").click(function(value){
        Network.sendMsg_user1();
    });

    $('#ssubmit').click(function(value){
        Network.sendMsg_user2();
    });
}

constructor.prototype.handleNewMsg = function(msg){
    this.model.pushMsg(msg);
}


constructor();