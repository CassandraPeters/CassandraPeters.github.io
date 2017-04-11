var effect = "All";
var typeList = [ "Food", "Additive", "Critter", "MonsterPart", "All" ];

function menuSelection(val) {
	var ul = document.getElementById("catList");
	var items = ul.getElementsByTagName("li");
	for (i = 0; i < items.length; i++) {
		items[i].style.opacity = 0.4;
	}
	
	items[val].style.opacity = 1;
	changeType(typeList[val]);
}

function fillList(ing) {
	var div = document.getElementById("ingList");
	div.innerHTML = "";
	for (i=0; i < ing.length; i++) {
		createIngredient(ing[i], div)
	}
}

function createIngredient(ing, div) {
	var minutes = Math.floor(ing["duration"] / 60);
	var seconds = ing["duration"] % 60;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	div.innerHTML += "<div class=\"itemContainer\">\n" +
	"	<div class=\"itemImage listImage\"> <img src=\"images/"+ing["type"]+"/"+ing["name"]+".png\" alt=\"APPLE\"></div>\n" +
	"	<div class=\"addButton listImage\"> <img src=\"images/addbutton.jpg\" alt=\"APPLE\" onclick=\"addToRecipe(this)\"> </div>\n" +
	"	<div class=\"itemInfo\">\n" +
	"		<p class=\"left ingredientName\">"+ing["name"]+"</p>\n" +
	"		<p class=\"right\">"+ing["type"]+"</p>\n" +
	"	</div>\n" +
	"	<div class=\"itemInfo itemProperties\" >\n" +
	"		<div class=\"itemEffects healEffect\">\n" +
	"			<img src=\"images/heart.png\">\n" +
	"			<p>"+ing["hearts"]+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects specialEffect\">\n" +
	"			<img src=\"images/"+ing["effect"]+".png\">\n" +
	"			<p>"+ing["level"]+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects timeEffect\">\n" +
	"			<img src=\"images/hourglass.png\">\n" +
	"			<p>"+minutes+":"+seconds+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects critEffect\">\n" +
	"			<p>"+ing["critChance"]+"%</p>\n" +
	"		</div>\n" +
	"	</div>\n" +
	"</div>\n";
}

function addToRecipe(ing) 
{
	//document.getElementById("recipe").innerHTML = "";
	ing = ing.parentNode.parentNode;
	//document.getElementById("recipe").innerHTML = ing.getElementsByClassName("ingredientName")[0].innerHTML;
	addIngredient(getIngWithName(ing.getElementsByClassName("ingredientName")[0].innerHTML));
}