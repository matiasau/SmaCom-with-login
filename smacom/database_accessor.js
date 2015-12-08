/*

note

----

how to get json data from server?

1.request a TOKEN
token is just like a onetime key to connect database.
firstlly you need to get a token
to request a token, you need the information of
URL, and APIKEY.
APIKEY is the constant key to access to the server.

2.send a query
send a query in mongoDB.

----

important point
1.this webpage runs in enviroment with internet connection

2.to access to the server and waiting the response,
it is implemented by handler.
handler is a function which is started by something triger.
so  "xmlhttp.onreadystatechange = function(){" is it,
it is the handler in this code.

----

algorithm

startRequest() is the main function.it is started by window.onload()

*/

var sessiondata;

window.onload = function(){
	getSessionData();
	var name,keys,query;

    //Parameters
    var TOKENREQUEST = "http://api.farmoni.jsdc.net/v1/json/token/";
    var APIKEY = "3fd5aa9c63f9307c98b0eab8c716b2e918212400744d665adff6817b140acf1f";
    var tokenJSON = null,TOKEN = null;
    /*
    in the case of adding parameter on GET request,
    [TOKENREQUEST]?[parameter name][=][parameter value]
    */          

    var xmlhttp = new XMLHttpRequest(); //Object instance

    //listener must be defined before xmlhttp.send() run
    //listener perform when server send data back to user
    xmlhttp.onreadystatechange = function(){
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var gotJSON = xmlhttp.responseText;
    		tokenJSON = JSON.parse(gotJSON);

    		if(tokenJSON.Response != 'Success'){
    			alert('TOKEN REQUEST FAILED');
    		}
    		else{
    			TOKEN = tokenJSON.Token;
                return getData(TOKEN);
            }
        }
    };
    xmlhttp.open("GET",TOKENREQUEST+"?Apikey="+APIKEY);
    xmlhttp.send();
}

function getSessionData(){
	
	$.post("../getUserInfo.php", function(data) {
		sessiondata = JSON.parse(data);
		$("#dialog").append("<ul><li>Name:"+ sessiondata.user.username +"</li><li>Email:"+ sessiondata.user.email +"</li></ul>");
		
	});
	
	return sessiondata;
}

function getData(TOKEN){
	if(TOKEN.length <= 0){
		alert("you've never gotten token or json file is broken");
		return;                
	}

	var name;
	var db1 = 'sensorData_sample2';
	var db2 = 'cropSituation_sample';
	var query = '{}';
    var keys = '[\"time\",\"growthState\",\"growthTrend\",\"vegeCode\",\"workerID\",\"areaID\"]';
    var xmlhttp = new XMLHttpRequest(); //Object instance
    var DATAREQUEST = "http://api.farmoni.jsdc.net/v1/json/collection/item/";
    var headerinfo = "Authorization";
    
	name = db2;

    xmlhttp.onreadystatechange = function(){
    	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    		var unparsedData = xmlhttp.responseText;
    		data = JSON.parse(unparsedData);
            //alert('response:' + data.Response);
            if(data.Response != 'Success'){
            	alert('DATA REQUEST FAILED');
            	return null;
            }
            else{
                alert(unparsedData);
                enchantjs(data.List,sessiondata);
                return;
            }
        }
    };
    //http://api.farmoni.jsdc.net/v1/json/collection/item/?Name=$2\&Keys=$KEYS\&Query=$QUERY
    //[URL][?Name=][value of Name][\&keys=][value of keys][\&querys=][value of querys]

    if(query != "")
    	xmlhttp.open("GET",DATAREQUEST+"?Name="+name+"&Keys="+keys+"&Query="+query);    
    else
    	xmlhttp.open("GET",DATAREQUEST+"?Name="+name+"&Keys="+keys);

    xmlhttp.setRequestHeader("Authorization",TOKEN);
    xmlhttp.send();
}

