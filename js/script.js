var w = 350,
	h = 350;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['Skills'];

//Data
var d = [
		  [
			{axis:"Data Visualization",value:0.65},
			{axis:"Prototyping",value:0.5},
			{axis:"Wireframing",value:0.7},
			{axis:"Usability Testing",value:0.4},
			{axis:"Video Editing",value:0.3},
			{axis:"User Research",value:0.7},
			{axis:"Programming",value:0.7},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 5,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w)
	.attr("height", h)

