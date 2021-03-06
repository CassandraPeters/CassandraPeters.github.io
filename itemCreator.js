var SecondLevel = {
	AttackUp:5,
	DefenseUp:5,
	MovingSpeed:5,
	Fireproof:7,
	Quietness:6,
	ResistCold:6,
	ResistHot:6,
	ResistElectric:4
};
var ThirdLevel = {
	AttackUp:7,
	DefenseUp:7,
	MovingSpeed:7,
	Fireproof:0,
	Quietness:9,
	ResistCold:0,
	ResistHot:0,
	ResistElectric:6
};
var countEffects = ["ExGutsMaxUp","GutsRecover","LifeMaxUp"];
var maxStrength2 = ["Fireproof","ResistCold","ResistHot"];
var maxStrength3 = ["AttackUp","DefenseUp","MovingSpeed","Quietness","ResistElectric"];

function getStrength(recipe)
{
	var effectType = recipe["effect"];
	var level = recipe["level"];
	var strength = 1;
	
	if (maxStrength3.includes(effectType) && level >= ThirdLevel[effectType]) strength = 3;
	else if (level >= SecondLevel[effectType]) strength = 2;
	
	return strength;
}

function maxStrength(recipe)
{
	var max = 3;
	
	if (maxStrength2.includes(recipe.effect)) max = 2;
	
	return max;
}

function createFractionText(recipe)
{
	var strength = getStrength(recipe);
	var level = recipe.level;
	goal = SecondLevel[recipe.effect];
	if (strength == 2)
	{
		goal = ThirdLevel[recipe.effect];
	}
	
	var result = "<div class=\"fraction\"><p class=\"numerator\">" + level + "</p><p class=\"denominator\">" + goal + "</p><img class=\"divide\" src=\"images/divide.png\">";
	
	return result;
}

function createItemHTML(item, itemType, div)
{
	var minutes = Math.floor(item["duration"] / 60);
	var seconds = item["duration"] % 60;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	var recSE = "";
	
	if (itemType == "rec") recSE = " recipeSE";
	
	var itemE = "<div class=\"itemEffects specialEffect"+recSE+"\">\n" +
	"<div class=\"effectIcon\"><img src=\"images/"+item["effect"]+".png\">\n";
	if (countEffects.includes(item["effect"]) || (item["level"] > 0 && itemType == "ing")) itemE += 	"<p class=\"effectNumber\">"+item["level"]+"</p>\n";
	else if (itemType == "rec" && item["effect"] != "None" && item.effect != "Conflict")
	{
		var strength = getStrength(item);
		if (strength > 1) 
		{
			itemE += "</div><div class=\"effectIcon\"><img src=\"images/"+item["effect"]+".png\">\n";
			if (strength > 2) itemE += "</div><div class=\"effectIcon\"><img src=\"images/"+item["effect"]+".png\">\n";
		}
		if (strength < maxStrength(item))
		{
			itemE += "</div>" + createFractionText(item);
		}
	}
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
	"			<p class=\"critNumber\">"+item["critChance"]+"%</p>\n" +
	"		</div>\n" +
	"	</div>\n";
	
	if (itemType == "ing") toWrite += "</div>";
	
	div.innerHTML += toWrite;
}