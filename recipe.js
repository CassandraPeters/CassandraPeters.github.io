var recipeIngredients = [];

var recipe;

function updateRecipe()
{
	recipe = {name:"NOT A NAME", type:"Meal or Elixer", effect:"None", level:0, strength:0, duration:0, hearts:0, critChance:0};
	var ing;
	for (i = 0; i < recipeIngredients.length; i++) {
		ing = recipeIngredients[i];
		
		if (recipe.effect == ing.effect || recipe.effect == "None") {
			recipe.effect = ing.effect;
			recipe.level += ing.level;
			recipe.duration += ing.duration;
		} else if (ing.effect != "None") {
			recipe.effect = "Conflict"; 
			recipe.level = 0;
			recipe.strength = 0;
			recipe.duration = 0;
		}
		
		recipe.hearts += ing.hearts;
		
		if (ing.critChance > recipe.critChance) recipe.critChance = ing.critChance;
		
		var ingplace = document.getElementById("ing"+(i+1));
		ingplace.src = "images/"+ing["type"]+"/"+ing["name"]+".png"
	}
	
	var dur = recipe["duration"];
	if (dur > 1800) dur = 1800;
	var minutes = Math.floor(dur / 60);
	var seconds = dur % 60;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	div = document.getElementById("recipe");
	div.innerHTML =
	"	<div class=\"itemImage listImage\"> <img src=\"images/"+recipe["type"]+"/"+recipe["name"]+".png\" alt=\"APPLE\"></div>\n"+
	"	<div class=\"itemInfo\">\n" +
	"		<p class=\"left ingredientName\">"+recipe["name"]+"</p>\n" +
	"		<p class=\"right\">"+recipe["type"]+"</p>\n" +
	"	</div>\n" +
	"	<div class=\"itemInfo itemProperties\" >\n" +
	"		<div class=\"itemEffects healEffect\">\n" +
	"			<img src=\"images/heart.png\">\n" +
	"			<p>"+recipe["hearts"]+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects specialEffect\">\n" +
	"			<img src=\"images/"+recipe["effect"]+".png\">\n" +
	"			<p>"+recipe["level"]+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects timeEffect\">\n" +
	"			<img src=\"images/hourglass.png\">\n" +
	"			<p>"+minutes+":"+seconds+"</p>\n" +
	"		</div>\n" +
	"		<div class=\"itemEffects critEffect\">\n" +
	"			<p>"+recipe["critChance"]+"%</p>\n" +
	"		</div>\n" +
	"	</div>\n";
}

function addIngredient(ing) {
	if (recipeIngredients.length < 5)
	{
		recipeIngredients.push(ing);
		updateRecipe();
	}
}

function removeIngredient(position)
{
	if (position < recipeIngredients.length)
	{
		var newIngs = [];
		for (i=0;i<recipeIngredients.length;i++) 
		{
			if (i != position) newIngs.push(recipeIngredients[i]);
			document.getElementById("ing"+(i+1)).src="";
		}
		recipeIngredients = newIngs;
		updateRecipe();
	}
}