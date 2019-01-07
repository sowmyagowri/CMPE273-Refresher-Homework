//carInfo is a JSON object
var carInfo = [
	{
		"brand":"Nissan",
		"model":"Altima",
		"color":"Brown"
	},
	{
		"brand":"Honda",
		"model":"Odyssey",
		"color":"Red"
	}
];

document.writeln("<table border = '1'><tr>");
document.writeln("<tr><th width=50><b>Brand</b></th><th width=50><b>Model</b></th><th width=50><b>Color</b></th></tr>");	

var i = 0;     
for(i = 0;i<carInfo.length;i++){	
    document.writeln("<tr>");    
    document.writeln("<td width = 50>" + carInfo[i].brand +"</td>");
    document.writeln("<td width = 50>" + carInfo[i].model +"</td>");
    document.writeln("<td width = 50>" + carInfo[i].color +"</td>");       
    document.writeln("</tr>");
}
       			
document.writeln("</tr></table>");