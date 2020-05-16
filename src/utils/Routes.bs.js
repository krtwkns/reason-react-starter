'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Home$ReasonReactExamples = require("../Home/Home.bs.js");
var NotFound$ReasonReactExamples = require("../NotFound/NotFound.bs.js");

function Routes(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match) {
    return React.createElement(NotFound$ReasonReactExamples.make, { });
  } else {
    return React.createElement(Home$ReasonReactExamples.make, { });
  }
}

var make = Routes;

exports.make = make;
/* react Not a pure module */
