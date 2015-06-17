/*
 * ESnet React Charts, Copyright (c) 2014, The Regents of the University of
 * California, through Lawrence Berkeley National Laboratory (subject
 * to receipt of any required approvals from the U.S. Dept. of
 * Energy).  All rights reserved.
 *
 * If you have questions about your rights to use or distribute this
 * software, please contact Berkeley Lab's Technology Transfer
 * Department at TTD@lbl.gov.
 *
 * NOTICE.  This software is owned by the U.S. Department of Energy.
 * As such, the U.S. Government has been granted for itself and others
 * acting on its behalf a paid-up, nonexclusive, irrevocable,
 * worldwide license in the Software to reproduce, prepare derivative
 * works, and perform publicly and display publicly.  Beginning five
 * (5) years after the date permission to assert copyright is obtained
 * from the U.S. Department of Energy, and subject to any subsequent
 * five (5) year renewals, the U.S. Government is granted for itself
 * and others acting on its behalf a paid-up, nonexclusive,
 * irrevocable, worldwide license in the Software to reproduce,
 * prepare derivative works, distribute copies to the public, perform
 * publicly and display publicly, and to permit others to do so.
 *
 * This code is distributed under a BSD style license, see the LICENSE
 * file for complete information.
 */

"use strict";

var React = require("react");
var invariant = require("react/lib/invariant");

/**
 * A Charts component is a grouping of charts which will be composited on top of
 * each other. It does no actual rendering itself, but instead is used for organizing
 * ChartRow children. There must be one, and only one, Charts grouping within a ChartRow.
 * All children of a ChartRow, for which there must be at least one, are considered a
 * chart. They should return an SVG <g> containing their render.
 */
var Charts = React.createClass({
  displayName: "Charts",
  render: function render() {
    invariant(false, "%s elements are for schema configuration only and should not be rendered", this.constructor.name);
  }
});

module.exports = Charts;