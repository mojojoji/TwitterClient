// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var win1 = Titanium.UI.createWindow({  
    title:'list',
    backgroundColor:'#fff'
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'Loading...',
	font:{fontSize:30,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
win1.add(label1);
//List of tweets(Table row)
var data = [];

//Loading twitter
var xhr = Ti.Network.createHTTPClient();
xhr.open("GET","http://api.twitter.com/1/statuses/user_timeline.xml?screen_name=jojimail&&trim_user=true");

xhr.onload = function()
{

var doc = this.responseXML.documentElement;
var items = doc.getElementsByTagName("text");
for(var i=0;i<items.length;i++)
	data[i] = Ti.UI.createTableViewRow({title:items.item(i).text,color:'#000000'});

var tableview = Titanium.UI.createTableView({
	data:data
});

win1.remove(label1);
win1.add(tableview);

}

xhr.send();

win1.open();
