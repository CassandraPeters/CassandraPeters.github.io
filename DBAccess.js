var ingredients = [
	{name:"Bladed Rhino Beetle", type:"Critter", effect:"AttackUp", level:1, duration:50, hearts:0, critChance:0},
	{name:"Mighty Thistle", type:"Food", effect:"AttackUp", level:1, duration:50, hearts:0, critChance:0},
	{name:"Mighty Bananas", type:"Food", effect:"AttackUp", level:2, duration:50, hearts:1, critChance:0},
	{name:"Razorshroom", type:"Food", effect:"AttackUp", level:2, duration:50, hearts:1, critChance:0},
	{name:"Mighty Carp", type:"Food", effect:"AttackUp", level:2, duration:50, hearts:2, critChance:0},
	{name:"Razorclaw Crab", type:"Food", effect:"AttackUp", level:2, duration:50, hearts:2, critChance:0},
	{name:"Mighty Porgy", type:"Food", effect:"AttackUp", level:3, duration:50, hearts:2, critChance:0},
	{name:"Armoranth", type:"Food", effect:"DefenseUp", level:1, duration:50, hearts:0, critChance:0},
	{name:"Rugged Rhino Beetle", type:"Critter", effect:"DefenseUp", level:1, duration:50, hearts:0, critChance:0},
	{name:"Fortified Pumpkin", type:"Food", effect:"DefenseUp", level:2, duration:50, hearts:1, critChance:0},
	{name:"Ironshroom", type:"Food", effect:"DefenseUp", level:2, duration:50, hearts:1, critChance:0},
	{name:"Armored Carp", type:"Food", effect:"DefenseUp", level:2, duration:50, hearts:2, critChance:0},
	{name:"Ironshell Crab", type:"Food", effect:"DefenseUp", level:2, duration:50, hearts:2, critChance:0},
	{name:"Armored Porgy", type:"Food", effect:"DefenseUp", level:3, duration:50, hearts:2, critChance:0},
	{name:"Endura Shroom", type:"Food", effect:"ExGutsMaxUp", level:1, duration:0, hearts:2, critChance:0},
	{name:"Tireless Frog", type:"Critter", effect:"ExGutsMaxUp", level:2, duration:0, hearts:4, critChance:0},
	{name:"Endura Carrot", type:"Food", effect:"ExGutsMaxUp", level:4, duration:0, hearts:4, critChance:0},
	{name:"Fireproof Lizard", type:"Critter", effect:"Fireproof", level:1, duration:150, hearts:0, critChance:0},
	{name:"Smotherwing Butterfly", type:"Critter", effect:"Fireproof", level:2, duration:150, hearts:0, critChance:0},
	{name:"Restless Cricket", type:"Critter", effect:"GutsRecover", level:1, duration:0, hearts:0, critChance:0},
	{name:"Stamella Shroom", type:"Food", effect:"GutsRecover", level:1, duration:0, hearts:1, critChance:0},
	{name:"Bright-Eyed Crab", type:"Food", effect:"GutsRecover", level:2, duration:0, hearts:2, critChance:0},
	{name:"Courser Bee Honey", type:"Food", effect:"GutsRecover", level:2, duration:0, hearts:4, critChance:0},
	{name:"Staminoka Bass", type:"Food", effect:"GutsRecover", level:4, duration:0, hearts:2, critChance:0},
	{name:"Energetic Rhino Beetle", type:"Critter", effect:"GutsRecover", level:6, duration:0, hearts:0, critChance:0},
	{name:"Hearty Truffle", type:"Food", effect:"LifeMaxUp", level:1, duration:0, hearts:4, critChance:0},
	{name:"Hearty Bass", type:"Food", effect:"LifeMaxUp", level:2, duration:0, hearts:4, critChance:0},
	{name:"Hearty Radish", type:"Food", effect:"LifeMaxUp", level:3, duration:0, hearts:5, critChance:0},
	{name:"Hearty Blueshell Snail", type:"Food", effect:"LifeMaxUp", level:3, duration:0, hearts:6, critChance:0},
	{name:"Big Hearty Truffle", type:"Food", effect:"LifeMaxUp", level:4, duration:0, hearts:6, critChance:0},
	{name:"Hearty Durian", type:"Food", effect:"LifeMaxUp", level:4, duration:0, hearts:6, critChance:0},
	{name:"Hearty Lizard", type:"Critter", effect:"LifeMaxUp", level:4, duration:0, hearts:8, critChance:0},
	{name:"Hearty Salmon", type:"Food", effect:"LifeMaxUp", level:4, duration:0, hearts:8, critChance:0},
	{name:"Big Hearty Radish", type:"Food", effect:"LifeMaxUp", level:5, duration:0, hearts:8, critChance:0},
	{name:"Hightail Lizard", type:"Critter", effect:"MovingSpeed", level:1, duration:60, hearts:0, critChance:0},
	{name:"Rushroom", type:"Food", effect:"MovingSpeed", level:1, duration:60, hearts:1, critChance:0},
	{name:"Swift Carrot", type:"Food", effect:"MovingSpeed", level:1, duration:60, hearts:1, critChance:0},
	{name:"Hot-Footed Frog", type:"Critter", effect:"MovingSpeed", level:2, duration:60, hearts:0, critChance:0},
	{name:"Swift Violet", type:"Food", effect:"MovingSpeed", level:2, duration:60, hearts:0, critChance:0},
	{name:"Fleet-Lotus Seeds", type:"Food", effect:"MovingSpeed", level:2, duration:60, hearts:1, critChance:0},
	{name:"Monster Extract", type:"Additive", effect:"None", level:0, duration:30, hearts:0, critChance:0},
	{name:"Rock Salt", type:"Additive", effect:"None", level:0, duration:30, hearts:0, critChance:0},
	{name:"Apple", type:"Food", effect:"None", level:0, duration:30, hearts:1, critChance:0},
	{name:"Hylian Shroom", type:"Food", effect:"None", level:0, duration:30, hearts:1, critChance:0},
	{name:"Wildberry", type:"Food", effect:"None", level:0, duration:30, hearts:1, critChance:0},
	{name:"Fairy", type:"Fairy", effect:"None", level:0, duration:30, hearts:10, critChance:0},
	{name:"Hyrule Bass", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Hyrule Herb", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Palm Fruit", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Raw Bird Drumstick", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Raw Meat", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Sanke Carp", type:"Food", effect:"None", level:0, duration:30, hearts:2, critChance:0},
	{name:"Hard-Boiled Egg", type:"Food", effect:"None", level:0, duration:30, hearts:3, critChance:0},
	{name:"Raw Bird Thigh", type:"Food", effect:"None", level:0, duration:30, hearts:3, critChance:0},
	{name:"Raw Prime Meat", type:"Food", effect:"None", level:0, duration:30, hearts:3, critChance:0},
	{name:"Raw Gourmet Meat", type:"Food", effect:"None", level:0, duration:30, hearts:6, critChance:0},
	{name:"Raw Whole Bird", type:"Food", effect:"None", level:0, duration:30, hearts:6, critChance:0},
	{name:"Ancient Screw", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Ancient Spring", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Bokoblin Horn", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Chuchu Jelly", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Hinox Toenail", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Keese Wing", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Lizalfos Horn", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Lynel Horn", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Moblin Horn", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Octorok Tentacle", type:"MonsterPart", effect:"None", level:0, duration:40, hearts:0, critChance:0},
	{name:"Chickaloo Tree Nut", type:"Food", effect:"None", level:0, duration:40, hearts:1, critChance:0},
	{name:"Acorn", type:"Food", effect:"None", level:0, duration:50, hearts:1, critChance:0},
	{name:"Star Fragment", type:"Additive", effect:"None", level:0, duration:60, hearts:0, critChance:100},
	{name:"Dinraal's Scale", type:"Additive", effect:"None", level:0, duration:60, hearts:1.25, critChance:100},
	{name:"Farosh's Scale", type:"Additive", effect:"None", level:0, duration:60, hearts:1.25, critChance:100},
	{name:"Naydra's Scale", type:"Additive", effect:"None", level:0, duration:60, hearts:1.25, critChance:100},
	{name:"Hylian Rice", type:"Additive", effect:"None", level:0, duration:60, hearts:2, critChance:0},
	{name:"Tabantha Wheat", type:"Additive", effect:"None", level:0, duration:60, hearts:2, critChance:0},
	{name:"Ancient Gear", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Ancient Shaft", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Bokoblin Fang", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Electric Keese Wing", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Fire Keese Wing", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Goat Butter", type:"Additive", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Hinox Tooth", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Ice Keese Wing", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Lizalfos Talon", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Lynel Hoof", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Moblin Fang", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Molduga Fin", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Octorok Eyeball", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Red Chuchu Jelly", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"White Chuchu Jelly", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Yellow Chuchu Jelly", type:"MonsterPart", effect:"None", level:0, duration:80, hearts:0, critChance:10},
	{name:"Cane Sugar", type:"Additive", effect:"None", level:0, duration:80, hearts:0, critChance:30},
	{name:"Fresh Milk", type:"Food", effect:"None", level:0, duration:80, hearts:1, critChance:0},
	{name:"Goron Spice", type:"Additive", effect:"None", level:0, duration:90, hearts:0, critChance:10},
	{name:"Bird Egg", type:"Food", effect:"None", level:0, duration:90, hearts:2, critChance:10},
	{name:"Ancient Core", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Bokoblin Guts", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Giant Ancient Core", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Hinox Guts", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Icy Lizalfos Tail", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Keese Eyeball", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Lizalfos Tail", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Lynel Guts", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Moblin Guts", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Molduga Guts", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Octo Balloon", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Red Lizalfos Tail", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Yellow Lizalfos Tail", type:"MonsterPart", effect:"None", level:0, duration:160, hearts:0, critChance:30},
	{name:"Dinraal's Claw", type:"Additive", effect:"None", level:0, duration:180, hearts:2, critChance:100},
	{name:"Farosh's Claw", type:"Additive", effect:"None", level:0, duration:180, hearts:2, critChance:100},
	{name:"Naydra's Claw", type:"Additive", effect:"None", level:0, duration:180, hearts:2, critChance:100},
	{name:"Shard of Dinraal's Fang", type:"Additive", effect:"None", level:0, duration:600, hearts:2.5, critChance:100},
	{name:"Shard of Farosh's Fang", type:"Additive", effect:"None", level:0, duration:600, hearts:2.5, critChance:100},
	{name:"Shard of Naydra's Fang", type:"Additive", effect:"None", level:0, duration:600, hearts:2.5, critChance:100},
	{name:"Shard of Dinraal's Horn", type:"Additive", effect:"None", level:0, duration:1800, hearts:3.75, critChance:100},
	{name:"Shard of Farosh's Horn", type:"Additive", effect:"None", level:0, duration:1800, hearts:3.75, critChance:100},
	{name:"Shard of Naydra's Horn", type:"Additive", effect:"None", level:0, duration:1800, hearts:3.75, critChance:100},
	{name:"Blue Nightshade", type:"Food", effect:"Quietness", level:1, duration:120, hearts:0, critChance:0},
	{name:"Sunset Firefly", type:"Critter", effect:"Quietness", level:1, duration:120, hearts:0, critChance:0},
	{name:"Sneaky River Snail", type:"Food", effect:"Quietness", level:1, duration:120, hearts:2, critChance:0},
	{name:"Silent Shroom", type:"Food", effect:"Quietness", level:2, duration:120, hearts:1, critChance:0},
	{name:"Stealthfin Trout", type:"Food", effect:"Quietness", level:2, duration:120, hearts:2, critChance:0},
	{name:"Silent Princess", type:"Food", effect:"Quietness", level:3, duration:120, hearts:2, critChance:0},
	{name:"Summerwing Butterfly", type:"Critter", effect:"ResistCold", level:1, duration:150, hearts:0, critChance:0},
	{name:"Warm Safflina", type:"Food", effect:"ResistCold", level:1, duration:150, hearts:0, critChance:0},
	{name:"Spicy Pepper", type:"Food", effect:"ResistCold", level:1, duration:150, hearts:1, critChance:0},
	{name:"Warm Darner", type:"Critter", effect:"ResistCold", level:2, duration:150, hearts:0, critChance:0},
	{name:"Sunshroom", type:"Food", effect:"ResistCold", level:2, duration:150, hearts:1, critChance:0},
	{name:"Sizzlefin Trout", type:"Food", effect:"ResistCold", level:3, duration:150, hearts:2, critChance:0},
	{name:"Electric Safflina", type:"Food", effect:"ResistElectric", level:1, duration:150, hearts:0, critChance:0},
	{name:"Thunderwing Butterfly", type:"Critter", effect:"ResistElectric", level:1, duration:150, hearts:0, critChance:0},
	{name:"Voltfruit", type:"Food", effect:"ResistElectric", level:1, duration:150, hearts:1, critChance:0},
	{name:"Electric Darner", type:"Critter", effect:"ResistElectric", level:2, duration:150, hearts:0, critChance:0},
	{name:"Zapshroom", type:"Food", effect:"ResistElectric", level:2, duration:150, hearts:1, critChance:0},
	{name:"Voltfin Trout", type:"Food", effect:"ResistElectric", level:3, duration:150, hearts:2, critChance:0},
	{name:"Cool Safflina", type:"Food", effect:"ResistHot", level:1, duration:150, hearts:0, critChance:0},
	{name:"Winterwing Butterfly", type:"Critter", effect:"ResistHot", level:1, duration:150, hearts:0, critChance:0},
	{name:"Hydromelon", type:"Food", effect:"ResistHot", level:1, duration:150, hearts:1, critChance:0},
	{name:"Cold Darner", type:"Critter", effect:"ResistHot", level:2, duration:150, hearts:0, critChance:0},
	{name:"Chillshroom", type:"Food", effect:"ResistHot", level:2, duration:150, hearts:1, critChance:0},
	{name:"Chillfin Trout", type:"Food", effect:"ResistHot", level:3, duration:150, hearts:2, critChance:0},
];

var currList = [];

var sortTypes = {
	Default:"Default",
	Alphabetically:"Alpha",
	EffectLevel:"Level",
	Duration:"Duration",
	Hearts:"Hearts",
	CritChance:"Crit"
}
var ingTypes = {
	all: "All",
	food: "Food",
	additive: "Additive",
	critter: "Critter",
	monsterPart: "MonsterPart"
}
var effectTypes = {
	all:"All",
	none:"None",
	attack:"AttackUp",
	defence:"DefenseUp",
	maxHearts:"LifeMaxUp",
	stam:"GutsRecover",
	maxStam:"ExGutsMaxUp",
	speed:"MovingSpeed",
	stealth:"Quietness",
	fireproof:"Fireproof",
	cold:"ResistCold",
	electric:"ResistElectric",
	heat:"ResistHot"
}

var listConstraints = {
	sort:sortTypes.Default,
	type:ingTypes.food,
	effect:effectTypes.all,
}

function changeSort(newSort)
{
	listConstraints.sort = newSort;
	sortCurrList();
}

function changeType(newType)
{
	listConstraints.type = newType;
	newList();
}

function changeEffect(newEffect)
{
	listConstraints.effect = newEffect;
	newList();
}

function newList()
{
	currList = ingredients.slice();
	if (listConstraints.type != ingTypes.all)
		currList = getSubsetWithName("type",listConstraints.type,currList);
	if (listConstraints.effect != effectTypes.all)
		currList = getSubsetWithName("effect",listConstraints.effect,currList);
	sortCurrList();
}

function sortCurrList()
{
	fillList(currList);
}

function getSubsetWithName(property,toCompare,array)
{
	var subset = [];
	for (i = 0; i < array.length; i++) { 
		if (toCompare == array[i][property]) {
			subset.push(array[i]);
		}
	}
	return subset;
}

function getIngOfType(type)
{
	var result;
	
	if (type != "All") result = getSubsetWithName("type",type,ingredients);
	else result = ingredients.slice();
	
	return result;
}

function getIngWithName(name)
{
	var found = false;
	var result = {};
	for (i=0;i<ingredients.length && !found;i++)
	{
		if (ingredients[i].name == name)
		{
			found = true;
			result = ingredients[i];
		}
	}
	return result;
}