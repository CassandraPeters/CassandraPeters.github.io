var recipeIngredients = [];

var recipe;

function updateRecipe()
{
	recipe = {name:"NOT A NAME", type:"Meal or Elixir", effect:"None", level:0, strength:0, duration:0, hearts:0, critChance:0};
	var ing, rType;
	var hasMonPart = false;
	var hasCritter = false;
	var hasFood = false;
	for (i = 0; i < recipeIngredients.length; i++) {
		ing = recipeIngredients[i];
		
		if (ing.type == "Food") hasFood = true;
		else if (ing.type == "MonsterPart") hasMonPart = true;
		else if (ing.type == "Critter") hasCritter = true;
		
		recipe.hearts += ing.hearts;
		
		if (recipe.effect == ing.effect || recipe.effect == "None" || ing.effect == "None") {
			if (ing.effect != "None")
				recipe.effect = ing.effect;
			recipe.level += ing.level;
			recipe.duration += ing.duration;
		} else {
			recipe.effect = "Conflict"; 
			recipe.level = 0;
			recipe.strength = 0;
			recipe.duration = 0;
		}
		
		if (ing.critChance > recipe.critChance) recipe.critChance = ing.critChance;
		
		var ingplace = document.getElementById("ing"+(i+1));
		ingplace.src = "images/"+ing["type"]+"/"+ing["name"]+".png";
	}
	
	if (hasMonPart && hasCritter)
	{
		recipe.name = "Elixir";
		recipe.type = "Elixir";
		recipe.duration += 30;
	}
	else if (hasFood && !hasMonPart && !hasCritter)
	{
		recipe.name = "Meal";
		recipe.type = "Meal";
	}
	else if (recipeIngredients.length > 0)
	{
		recipe.name = "Dubious Food";
		recipe.type = "Meal";
		recipe.effect = "Conflict";
	}
	else
	{
		recipe.name = "None";
		recipe.type = "None";
	}
	
	
	
	if (recipe.duration > 1800) recipe.duration = 1800;
	div = document.getElementById("recipe");
	div.innerHTML = "";
	createItemHTML(recipe, "rec", div);
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