import '../scss/main.scss';


/////////////
/////////////
/////////////

jQuery('document').ready(function(){
	show();

	$('#refresh').click(function(){
		show();
	});
});


function show() {
	$('#quote').text(generateNew());
}

function generateNew() {
	var subjects = [
		[['una', 'la'], 'lotta', 1],
		[['il', 'il'], 'capitale', 0],
		[["un", "l'"], "esercito", 0],
		[["una", "la"], "Karola Rackete", 1],
	    [["un", "il"], "pensiero", 0],
	    [["un", "il"], "padronato", 0],
	    [["una", "la"] ,"sinistra", 1],
	    [["una", "la"] ,"classe", 1],
	    [["una" ,"la"], "delegittimazione", 1],
	    [["un`", "l`"], "immigrazione", 1],
	    [["un", "il"], "migrante", 0],
	    [["un`", "l`"], "unione europea", 1],
	    [["un`", "l`"], "unione", 1],
	    [["una", "la"], "sovranità", 1],
	    [["un", "il"], "Marx", 0],
	    [["un", "il"], "globalismo", 0],
	    [["un", "il"], "liberismo", 0],
	    [["una", "la"], "civiltà", 1],
		[["un", "il"], "mondo", 0],
		[["un", "l`"], "intellettuale", 0],
		[["un'", "l`"], 'economia', 1]
	];

	var prefixes = [
		"pluto",
		"catto",
		"pseudo",
		"euro",
		"cosmo",
		"global",
		"post",
		"iper",
		"dis",
		"pre",
		"post",
		"contro",
		"circum",
		"iper",
		"turbo",
		"ipo",
		"sub",
		"de",
		"inter"
	];

	var abjectives = [
		["capitalista", "capitalista"],
		["cratico", "cratica"],
		["sionista", "sionista"],
		["comunista", "comunista"],
		["sovranista", "sovranista"],
		["marxista", "marxista"],
		["liberale", "liberale"],
		["politico", "politica"],
		["regressivo", "regressiva"],
		["nazionale", "nazionale"],
		["borghese", "borghese"],
		["europeo", "europea"]
		["internazionale", "internazionale"],
		["globalista", "globalista"],
		["morale", "morale"],
		["moderno", "moderna"],
		["arcobalenico", "arcobalenica"],
		["boldriniano", "boldriniana"],
		["coessenziale", "coessenziale"],
		["materialista", "materialista"]
	];

	var verbs = [
		["costruisce"],
		["istituzionalizza"],
		["regolamenta"],
		["domina"],
		["evolve"],
		["accentra"],
		["anestetizza"],
		["rimuove"],
		["sovranizza"]
		["legittima"],
		["oggettivizza"],
		["problematizza"]
	];



	var sentence = [];
	var _subject = r(subjects);
	var _abjective = r(prefixes) + '-' + r(abjectives)[_subject[2]];
	var _verb = r(prefixes)+r(verbs)
	var _object = r(subjects);
	var _new_abjective = r(prefixes) + '-' + r(abjectives)[_object[2]];
	var _new_verb = r(prefixes)+r(verbs);
	var _new_object = r(subjects);
	var _new_new_abjective = r(prefixes) + '-' + r(prefixes) + r(abjectives)[_new_object[2]];


	return _subject[0][1] + ' ' + _subject[1] + ' ' + _abjective + ' ' + _verb + ' ' + _object[0][0] + ' ' + _object[1] + ' ' + _new_abjective + ' che ' + _new_verb + ' ' + _new_object[0][1] + ' ' + _new_object[1] + ' ' + _new_new_abjective+'.';
}

function r(to_eval){
	return to_eval[Math.floor( to_eval.length * Math.random())];
}
