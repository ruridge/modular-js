/*global jQuery, Handlebars */
var template = Handlebars.compile($("#people-template").html());
var people = [];

$("#peopleModule")
  .find("button")
  .on("click", function() {
    people.push(
      $("#peopleModule")
        .find("input")
        .val()
    );

    $("#peopleModule")
      .find("#people")
      .html(template({ people }));
  });

$("#peopleModule")
  .find("ul")
  .on("click", "i.del", function(e) {
    var $remove = $(e.target).closest("li");
    var i = $("#peopleModule")
      .find("ul")
      .find("li")
      .index($remove);

    $remove.remove();
    people.splice(i, 1);
  });
