// Coat of Arms Svg Pieces

var solidFieldSvg = function(fieldColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + fieldColor + "\" />";
}

var perPaleSvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><rect x=\"128\" width=\"128\" height=\"320\" fill=\"" + secondaryColor + "\" />";
}

var perFessSvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><rect y=\"160\" width=\"256\" height=\"160\" fill=\"" + secondaryColor + "\" />";
}

var perBendSvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><polygon points=\"0,0 0,320 256,320\" style=\"fill:" + secondaryColor + ";stroke-width:0\" />";
}

var perBendSinisterSvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><polygon points=\"256,0 0,320 256,320\" style=\"fill:" + secondaryColor + ";stroke-width:0\" />";
}

var perSaltireSvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><polygon points=\"0,0 256,0 128,160\" style=\"fill:" + secondaryColor + ";stroke-width:0\" /><polygon points=\"0,320 256,320 128,160\" style=\"fill:" + secondaryColor + ";stroke-width:0\" />";
}

var gyronnySvg = function(primaryColor, secondaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"" + primaryColor + "\" /><polygon points=\"0,0 128,160 128,0\" style=\"fill:" + secondaryColor + ";stroke-width:0\" /><polygon points=\"256,320 128,160 128,320\" style=\"fill:" + secondaryColor + ";stroke-width:0\" /><polygon points=\"256,0 128,160 256,160\" style=\"fill:" + secondaryColor + ";stroke-width:0\" /><polygon points=\"0,320 128,160 0,160\" style=\"fill:" + secondaryColor + ";stroke-width:0\" />";
}

var paleSvg = function(ordinaryColor) {
    return "<line x1=\"0\" y1=\"160\" x2=\"256\" y2=\"160\" stroke-width=\"100\" stroke=\"" + ordinaryColor + "\" />";
}

var fessSvg = function(ordinaryColor) {
    return "<line x1=\"128\" y1=\"0\" x2=\"128\" y2=\"320\" stroke-width=\"80\" stroke=\"" + ordinaryColor + "\" />";
}

var bendSvg = function(ordinaryColor) {
    return "<line x1=\"0\" y1=\"0\" x2=\"256\" y2=\"320\" stroke-width=\"80\" stroke=\"" + ordinaryColor + "\" />";
}

var bendSinisterSvg = function(ordinaryColor) {
    return "<line x1=\"256\" y1=\"0\" x2=\"0\" y2=\"320\" stroke-width=\"80\" stroke=\"" + ordinaryColor + "\" />";
}

var saltireSvg = function(ordinaryColor) {
    return "<line x1=\"256\" y1=\"0\" x2=\"0\" y2=\"320\" stroke-width=\"40\" stroke=\"" + ordinaryColor + "\" /><line x1=\"0\" y1=\"0\" x2=\"256\" y2=\"320\" stroke-width=\"40\" stroke=\"" + ordinaryColor + "\" />";
}

var crossSvg = function(ordinaryColor) {
    return "<line x1=\"0\" y1=\"160\" x2=\"256\" y2=\"160\" stroke-width=\"40\" stroke=\"" + ordinaryColor + "\" /><line x1=\"128\" y1=\"0\" x2=\"128\" y2=\"320\" stroke-width=\"40\" stroke=\"" + ordinaryColor + "\" />";
}

var chevronSvg = function(ordinaryColor) {
    return "<polygon points=\"0,320 128,160 256,320 230,320 128,190 26,320\" style=\"fill:" + ordinaryColor + ";stroke-width:0\" />";
}

var orleSvg = function(ordinaryColor) {
    return "<rect width=\"256\" height=\"320\" fill=\"none\" stroke-width=\"64\" stroke=\"" + ordinaryColor + "\" />";
}

var quarterCoats = function(coatOneSvg, coatTwoSvg) {
    return "<g transform=\"scale(0.5)\">" + coatOneSvg + "</g><g transform=\"translate(128,0) scale(0.5)\">" + coatTwoSvg + "</g><g transform=\"translate(0,160) scale(0.5)\">" + coatTwoSvg + "</g><g transform=\"translate(128,160) scale(0.5)\">" + coatOneSvg + "</g>";
}

var cantonCoats = function(coatOneSvg, coatTwoSvg) {
    return coatOneSvg + "<g transform=\"scale(0.5)\">" + coatTwoSvg + "</g>";
}

var inescutcheonCoats = function(coatOneSvg, coatTwoSvg) {
    return coatOneSvg + "<g transform=\"translate(64,80) scale(0.5)\">" + coatTwoSvg + "</g>";
}

var impaleCoats = function(coatOneSvg, coatTwoSvg) {
    return "<g transform=\"scale(0.5,1)\">" + coatOneSvg + "</g><g transform=\"translate(128,0) scale(0.5,1)\">" + coatTwoSvg + "</g>";
}

var dimidateCoats = function(coatOneSvg, coatTwoSvg) {
    return coatOneSvg + "<svg x=\"128\" y=\"0\" width=\"128\" height=\"320\" viewBox=\"128 0 128 320\" preserveAspectRatio=\"none\">" + coatTwoSvg + "</svg>";
}

// Data and Configuration

var coats = [
  {
    coatName: "New Coat",
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"none\" stroke=\"black\" stroke-width=\"10%\" stroke-dasharray=\"40 15\" />",
    onClick: ""
  },
  {
    coatName: "Sable",
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"black\" />",
    onClick: ""
  },
  {
    coatName: "Or",
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"yellow\" />",
    onClick: ""
  }
];

var colorSelect = [
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"black\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"red\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"green\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"blue\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"purple\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"white\" />",
    onClick: ""
  },
  {
    svg: "<rect width=\"100%\" height=\"100%\" fill=\"yellow\" />",
    onClick: ""
  },
];

var fieldDivisions = [
  {
    coatName: "Solid",
    svg: solidFieldSvg("black"),
    onClick: ""
  },
  {
    coatName: "Per Pale",
    svg: perPaleSvg("black", "yellow"),
    onClick: ""
  },
  {
    coatName: "Per Fess",
    svg: perFessSvg("black", "yellow"),
    onClick: ""
  },
  {
    coatName: "Per Bend",
    svg: perBendSvg("black", "yellow"),
    onClick: ""
  },
  {
    coatName: "Per Bend Sinister",
    svg: perBendSinisterSvg("black", "yellow"),
    onClick: ""
  },
  {
    coatName: "Per Saltaire",
    svg: perSaltireSvg("black", "yellow"),
    onClick: ""
  },
  {
    coatName: "Gyronny",
    svg: gyronnySvg("black", "yellow"),
    onClick: ""
  },
];

var ordinaries = [
  {
    coatName: "Pale",
    svg: paleSvg("green"),
    onClick: ""
  },
  {
    coatName: "Fess",
    svg: fessSvg("green"),
    onClick: ""
  },
  {
    coatName: "Bend",
    svg: bendSvg("green"),
    onClick: ""
  },
  {
    coatName: "Bend Sinister",
    svg: bendSinisterSvg("green"),
    onClick: ""
  },
  {
    coatName: "Saltire",
    svg: saltireSvg("green"),
    onClick: ""
  },
  {
    coatName: "Cross",
    svg: crossSvg("green"),
    onClick: ""
  },
  {
    coatName: "Chevron",
    svg: chevronSvg("green"),
    onClick: ""
  },
  {
    coatName: "Orle",
    svg: orleSvg("green"),
    onClick: ""
  },
];

var marshaling = [
  {
    coatName: "Quartering",
    svg: quarterCoats(solidFieldSvg("yellow") + saltireSvg("red"), solidFieldSvg("yellow") + crossSvg("red")),
    onClick: ""
  },
  {
    coatName: "Canton Coats",
    svg: cantonCoats(solidFieldSvg("yellow") + saltireSvg("red"), solidFieldSvg("yellow") + crossSvg("red")),
    onClick: ""
  },
  {
    coatName: "Inescutcheon",
    svg: inescutcheonCoats(solidFieldSvg("yellow") + saltireSvg("red"), solidFieldSvg("yellow") + crossSvg("red")),
    onClick: ""
  },
  {
    coatName: "Impale",
    svg: impaleCoats(solidFieldSvg("yellow") + saltireSvg("red"), solidFieldSvg("yellow") + crossSvg("red")),
    onClick: ""
  }
];

var primaryCoatIndex = 1;
var secondaryCoatIndex = 2;

var primaryColor = "black";
var secondaryColor = "yellow";
var primaryColorIndex = 0;
var secondaryColorIndex = 6;

// Coat of Arms Actions





// Visualizations

var drawCoat = function(height, width, coatInfo) {
  return "<div class=\"well\"><h4>" + coatInfo.coatName + "</h4><svg width=\"" + width + "\" height=\"" + height + "\">" + coatInfo.svg + "</svg></div>";
};

var drawPrimaryCoat = function() {
  d3.select("#primary-coat")
    .html(function(d) {
      return "<div class=\"page-header\"><h2>Primary Coat</h2></div>" + drawCoat(320, 256, coats[primaryCoatIndex]);
    });
}

var drawSecondaryCoat = function() {
  d3.select("#secondary-coat")
    .html(function(d) {
      return "<div class=\"page-header\"><h2>Secondary Coat</h2></div>" + drawCoat(320, 256, coats[secondaryCoatIndex]);
    });
}

var drawAllCoats = function() {
  d3.select("#all-coats-row").selectAll("div")
    .data(coats)
    .enter()
    .append("div")
    .classed("col-xs-6 col-sm-4 col-md-4 col-lg-3", true)
    .html(function(d) {
      return drawCoat(160, 128, d);
    });
}

//Initial Set Up

d3.select("#primary-color-select").selectAll("svg")
  .data(colorSelect)
  .enter()
  .append("svg")
  .attr("width", "32px")
  .attr("height", "32px")
  .html(function(d, i) {
    if (i == primaryColorIndex) {
      return d.svg + "<rect x=\"10%\" y=\"10%\" width=\"80%\" height=\"80%\" fill=\"none\" stroke=\"black\" />";
    } else {
      return d.svg;
    }
  });

d3.select("#secondary-color-select").selectAll("svg")
  .data(colorSelect)
  .enter()
  .append("svg")
  .attr("width", "32px")
  .attr("height", "32px")
  .html(function(d, i) {
    if (i == secondaryColorIndex) {
      return d.svg + "<rect x=\"10%\" y=\"10%\" width=\"80%\" height=\"80%\" fill=\"none\" stroke=\"black\" />";
    } else {
      return d.svg;
    }
  });

d3.select("#ordinaries").selectAll("svg")
  .data(ordinaries)
  .enter()
  .append("svg")
  .attr("width", "64px")
  .attr("height", "80px")
  .html(function(d) {
    return "<g transform=\"scale(0.25)\">" + d.svg + "</g>";
  });

d3.select("#field-division").selectAll("svg")
  .data(fieldDivisions)
  .enter()
  .append("svg")
  .attr("width", "64px")
  .attr("height", "80px")
  .html(function(d) {
    return "<g transform=\"scale(0.25)\">" + d.svg + "</g>";
  });

d3.select("#marshaling").selectAll("svg")
  .data(marshaling)
  .enter()
  .append("svg")
  .attr("width", "64px")
  .attr("height", "80px")
  .html(function(d) {
    return "<g transform=\"scale(0.25)\">" + d.svg + "</g>";
  });

drawPrimaryCoat();
drawSecondaryCoat();
drawAllCoats();

