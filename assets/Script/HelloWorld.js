cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = "ok1";
        var xhr = cc.loader.getXMLHttpRequest();   
        console.log("Status: Send Get Request to httpbin.org");  
        //set arguments with <URL>?xxx=xxx&yyy=yyy  
        xhr.open("GET", "http://httpbin.org/get?show_env=1s", true);  
        var self = this
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {  
                var httpStatus = xhr.statusText;  
                var response = xhr.responseText.substring(0, 100) + "...";   
                console.log("Status: Got GET response! " + httpStatus + response);
                this.label.string = "ok";
            }  
        }.bind(self) ;  
        xhr.send();  
        
        var xhr = cc.loader.getXMLHttpRequest();  
        console.log("Status: Send Post Request to httpbin.org with plain text");  
  
        xhr.open("POST", "http://httpbin.org/post");  
        //set Content-type "text/plain;charset=UTF-8" to post plain text  
        xhr.setRequestHeader("Content-Type","text/plain;charset=UTF-8");  
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {  
                var httpStatus = xhr.statusText;  
                var response = xhr.responseText.substring(0, 100) + "...";
                console.log("Status: Got POST response! " + httpStatus + response);  
            }  
        };  
        xhr.send("plain text message");
    },

    // called every frame
    update: function (dt) {

    },
});
