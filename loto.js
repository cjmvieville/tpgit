var nbLigne = 0;
var nbCarte = 0;
function getLigne(){
	return "Ligne"+(nbLigne>1?"s":"")+" : "+nbLigne;
}

function getCarte(){
	return "Carte"+(nbCarte>1?"s":"")+" : "+nbCarte;
}
function selection(el){
	if(jQuery(el).hasClass("selection")){
		jQuery(el).removeClass("selection");
		jQuery('#tirage').html("");
	} else {
		jQuery(el).addClass("selection");
		jQuery('#tirage').html(jQuery(el).html());
	}
	jQuery('#carte').html(getCarte());
	jQuery('#ligne').html(getLigne());
}
function incLigne(){
	nbLigne++;
	jQuery('#ligne').html(getLigne());
}
function incCarte(){
	nbCarte++;
	jQuery('#carte').html(getCarte());
}
function decLigne(){
	if(nbLigne>0)nbLigne--; 
	jQuery('#ligne').html(getLigne());
}
function decCarte(){
	if(nbCarte>0)nbCarte--; 
	jQuery('#carte').html(getCarte());
}