'use strict';

var React = require("react");

function NotFound(Props) {
  return React.createElement("main", undefined, "404 Page not found!");
}

var make = NotFound;

exports.make = make;
/* react Not a pure module */
