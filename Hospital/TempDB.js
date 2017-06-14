var procedures = [];

/*
	Threshold: If the patient weighs less than the threshold value they receive the lower dose, if the patient weighs more they receive the higher dose
	Flat: Patient receives this dose
	Weight: Patient receives a dose based on weight. eg. 30 mg/kg This is the default dose type if none is given
	RangedWeight: Patient receives a variable dose based on weight. eg. 50-75 mg/kg
*/
var doseTypes = 
{
	Threshold:"Threshold",
	Flat:"Flat",
	Weight:"Weight",
	RangedWeight:"RangedWeight"
}

//agent name list to reduce possibility of spelling errors elsewhere, always use this to refer to antimicrobials
var antimicrobials =
{
	Cefazolin:"Cefazolin",
	Cefotetan:"Cefotetan",
	Cefoxitin:"Cefoxitin",
	Ceftriaxone:"Ceftriaxone",
	Clindamycin:"Clindamycin",
	Ciprofloxacin:"Ciprofloxacin",
	Gentamycin:"Gentamycin",
	Levofloxacin:"Levofloxacin",
	Metronidazole:"Metronidazole",
	Piperacillin:"Piperacillin-tazobactam",
	Vancomycin:"Vancomycin"
}

//Doses in mg
var agentInfo = 
[
	{name:antimicrobials.Cefazolin, adultDoseType:doseTypes.Threshold, adultDoseThreshold:120, adultDoseBelow:2000, adultDoseAbove:3000, pediatricDose:30, interval:4},
	{name:antimicrobials.Cefotetan, adultDoseType:doseTypes.Flat, adultDose:2000,pediatricDose:40, interval:6}
];

function createDB()
{
	createProcedures();
}

function createProcedures()
{
	/*procedures.push({name:"",recommended:[],alternative:[],gradeOfEvidence:''});
	procedures.push({name:"",
	recommended:
	[
	
	],
	alternative:
	[
	],
	gradeOfEvidence:''});
	*/
	procedures.push({name:"The Good Surgery",
	recommended:
	[
		[antimicrobials.Cefazolin, antimicrobials.Metronidazole],
		[antimicrobials.Cefotetan]
	],
	alternative:
	[
		[antimicrobials.Clindamycin, antimicrobials.Gentamycin],
		[antimicrobials.Levofloxacin],
		[antimicrobials.Clindamycin]
	],
	gradeOfEvidence:'A'});
}