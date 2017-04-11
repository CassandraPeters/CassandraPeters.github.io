function createItemHTML(item, itemType, div)
{

	var minutes = Math.floor(item["duration"] / 60);
	var seconds = item["duration"] % 60;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	var itemE = "<div class=\"itemEffects specialEffect\">\n" +
	"<div class=\"effectIcon\"><img src=\"images/"+item["effect"]+".png\">\n";
	if (item["level"] > 0) itemE += 	"<p class=\"effectNumber\">"+item["level"]+"</p>\n";
	itemE += "</div></div>\n";
	
	var toWrite = "";
	
	if (itemType == "ing") toWrite += "<div class=\"itemContainer\">";
	
	toWrite += "<div class=\"itemImage listImage\"> <img src=\"images/"+item["type"]+"/"+item["name"]+".png\" alt=\"APPLE\"></div>\n";
	
	if (itemType == "ing") toWrite += "<div class=\"addButton listImage\"> <img src=\"images/icons/addbutton.jpg\" alt=\"APPLE\" onclick=\"addToRecipe(this)\"> </div>";
	
	toWrite += "<div class=\"itemInfo"
	
	if (itemType == "ing") toWrite += " ingInfo";
	else toWrite += " recInfo";
	
	toWrite += "\">" + "<p class=\"left ingredientName\">"+item["name"]+"</p>" +
	"<p class=\"right\">"+item["type"]+"</p>" +
	"</div>";
	
	toWrite +="	<div class=\"itemInfo itemProperties\">" +
	"		<div class=\"itemEffects healEffect\">\n" +
	"			<img src=\"images/heart.png\">\n" +
	"			<p class=\"effectNumber\">"+item["hearts"]+"</p>\n" +
	"		</div>\n" +
				itemE +
	"		<div class=\"itemEffects timeEffect\">\n" +
	"			<img src=\"images/hourglass.png\">\n" +
	"			<p class=\"effectNumber\">"+minutes+":"+seconds+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects critEffect\">\n" +
	"			<p class=\"effectNumber\">"+item["critChance"]+"%</p>\n" +
	"		</div>\n" +
	"	</div>\n";
	
	if (itemType == "ing") toWrite += "</div>";
	
	div.innerHTML += toWrite;
}