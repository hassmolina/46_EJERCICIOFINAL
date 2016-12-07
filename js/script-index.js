$(document).ready(function() {
    $(".js-back").hide();
    renderHighlightedRecipes(recipesArray);
    printNews();
    renderActivities(activities);
});

function printNews() {
    var newRecipe = $('.callout-news > p');
    newRecipe.text("NUEVAS RECETAS");
};



//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"


/*
 * Función que se encarga de pintar TODAS las recetas que tengan
 * marcado el atributo "highlighted" como TRUE
 */
function renderHighlightedRecipes(recipesArray) {
    console.log('Recipes: ', recipesArray);
    var racont = recipesArray[i];
    for (var i = 0; i < recipesArray.length; i++) {
        if (recipesArray[i].highlighted == true) {
            renderRecipe(recipesArray[i]);
        }
    }
};
/*
 * Función que se encarga de pintar UNA recetas que tenga
 * marcado el atributo "highlighted" como TRUE
 * Aqui se tiene que crear el HTML que esta en el
 * archivo "templates/templates-recipe.html"
 */

function renderRecipe(recipe) {
    console.log('Voy a pintar la receta: ', recipe);


    var link1 = $("<a></a>");
    link1.addClass("item-recipe");

    var span1 = $("<span></span>");
    span1.addClass("attribution");

    var spanTitle = $("<span></span>");
    spanTitle.text(recipe.title);
    spanTitle.addClass("title-recipe");

    var spanMeta = $("<span></span>");
    spanMeta.addClass("metadata-recipe");

    var spanAuthor = $("<span></span>");
    spanAuthor.addClass("author-recipe")
    spanAuthor.text(recipe.source.name);

    var spanBookmark = $("<span></span>");
    spanBookmark.addClass("bookmarks-recipe");

    var spanIconBook = $("<span></span>");
    spanIconBook.addClass("icon-bookmark");


    var img = $('<img/>');
    img.attr("src", "img/recipes/320x350/" + recipe.name + ".jpg");


    spanBookmark.append(spanIconBook);
    spanMeta.append(spanAuthor, spanBookmark);
    span1.append(spanTitle, spanMeta);
    link1.append(span1, img);

    $(".list-recipes").append(link1);

}



/*
 * Función que se encarga de pintar todas las actividades
 */
function renderActivities(activitiesArray) {
    console.log('Activities: ', activitiesArray);
    if (activitiesArray.length > 0) {
        $(".wrapper-message").hide();
    }
    for (var i = 0; i < activitiesArray.length; i++) {
        renderActivity(activitiesArray[i]);
    }
}

/*
 * Función que se encarga de pintar una actividad
 * Aqui se tiene que crear el HTML que esta en el
 * archivo "templates/templates-activity.html"
 */
function renderActivity(recipe) {
    var templateAct =
        '<a href="#" class="item - activity ">' +
        '<span class="atribution">' +
        '<span class="avatar">' +
        '<img src="<%= userAvatar %>" class="image-avatar">' +
        '</span>' +
        '<span class="meta">' +
        '<span class="author"><%= userName %></span>' +
        '<span class="recipe"><%= recipeName %></span>' +
        '<span class="location">&mdash;<%= place %></span>' +
        '</span>' +
        '</span>' +
    '<div class="bg-image" style="background-image: url(<%= image%>)"></div>' +
    '</a>';

    var compiled = _.template(templateAct);
    var a = compiled(recipe);
    console.log('mostrar', a);

    var element = $(a);
    $('.list-activities').append(element);
}
