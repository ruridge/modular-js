var people = (function() {
  var people = ["Mittens", "Cookie"];

  //cache DOM
  var $el = $("#peopleModule");
  var $button = $el.find("button");
  var $input = $el.find("input");
  var $ul = $el.find("ul");
  var template = Handlebars.compile($el.find("#people-template").html());

  //bind events
  $button.on("click", addPerson.bind(this));
  $ul.on("click", "i.del", removePerson.bind(this));

  _render();

  function _render() {
    var data = { people: people };
    $ul.html(template(data));
  }

  function addPerson(value) {
    var name = typeof value === "string" ? value : $input.val();
    people.push(name);
    _render();
    $input.val("");
  }

  function removePerson(value) {
    var i;
    if (typeof value === "number") {
      i = value;
    } else {
      var $remove = $(value.target).closest("li");
      i = $ul.find("li").index($remove);
    }

    people.splice(i, 1);
    _render();
  }

  return {
    addPerson: addPerson,
    removePerson: removePerson
  };
})();
