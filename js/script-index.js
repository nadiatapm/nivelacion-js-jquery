$(document).ready( function(){
	

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
}/*$('ol li').each(function(indice, elemento) {
  console.log('El elemento con el índice '+indice+' contiene '+$(elemento).text());
});*/

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
/* Oculta la flecha cuando se muestre index.html​ (image con resultado final).*/
$("#botonresponsive").click(function () {
	$("#mostrarocultarmenumovil").stop().toggle(fast);
	$("#mostrarocultarmenumovil").css(display,inline-block);
	return false;
});
/*En esta etapa tienes que pintar una noticia, en el párrafo que está 
dentro de NEWS*/

$(document).ready(function(){
	$("#news").on("mouseover",function(){
		$("#parrafo").css("color", "#c18137");
	});
});
$(document).ready(function(){
	$("#news").on("mouseover",function(){
		$("#txt").css("color", "#8137c1");
	});
});
/*1. Crea un función llamada printNews​.
2. Dentro de esta función asigna el texto "NUEVAS RECETAS" al párrafo.*/
$(".leer").hover(function (){
	var texto = $("#nvanoticia").text();

});
$(".reemplazar").hover(function (){
	$("#nvanoticia").text("NUEVAS RECETAS");
});