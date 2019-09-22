var stats = (function() {
  "use strict";

  var people = 0;

  //cache DOM
  var $el = $("#statsModule");
  var $continer = $el.find("div.continer");
  var template = Handlebars.compile($el.find("#stats-template").html());

  //bind events
  bus.on("peopleChanged", _setPeople);

  _render();

  function _render() {
    $continer.html(template({ people: people }));
  }

  function _setPeople(newPeople) {
    people = newPeople.length;
    _render();
  }

  function destroy() {
    $el.remove();
    bus.off("peopleChanged", _setPeople);
  }

  return {
    destroy: destroy
  };
})();
