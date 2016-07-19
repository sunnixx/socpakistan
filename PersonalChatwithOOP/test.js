var Network = function(){
    
}

Network.prototype.loadMsgs = function(func){
    
    $.get('http://datastore.asadmemon.com/',function(res){
        func(res);
    });
}






///


var Controller = function(){
    
    this.net = new Network();
    this.model = new Model();
    
    this.net.loadMsgs(function(res){
        this.model.UpdateMsgs(res);//
    });
    
    //sjdhksajhdjkhashdashkdhashjkdkjashd
    //jasdhkahskdjhajkhsdkjha
}

