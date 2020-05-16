'use strict';

var React = require("react");

require("./style.scss");

function Home(Props) {
  return React.createElement("main", undefined, "Hello World  ");
}

var make = Home;

exports.make = make;
/*  Not a pure module */
