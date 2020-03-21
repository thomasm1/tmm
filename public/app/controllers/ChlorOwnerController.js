(function() {

    angular.module('app')
        .controller('ChlorOwnerController', ['$q', '$log', '$state', ChlorOwnerController]);

    function ChlorOwnerController($q, $log, $state) {

        vm = this;
        vm.demos = false;
        vm.chlorOwn = 'ChlorOwnerController loaded';
        console.log(vm.chlorOwn);
        // var svg = d3.select("#s-ownership-svg"),

        //     width = +svg.attr("width"),

        //     height = +svg.attr("height");


// configuration
var colorVariable = 'Home ownership  rate(%)'
var geoIDVariable = 'id'
var format = d3.format(',')

// Set tooltips
var tipOwner = d3
  .tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(
    d =>
      `<strong>Country: </strong><span class='details'>${
        d.properties.name
      }<br></span><strong>Population: </strong><span class='details'>${format(
        d[colorVariable]
      )}</span>`
  )

tipOwner.direction(function(d) {
  if (d.properties.name === 'Antarctica') return 'n'
  // Americas
  if (d.properties.name === 'Greenland') return 's'
  if (d.properties.name === 'Canada') return 'e'
  if (d.properties.name === 'USA') return 'e'
  if (d.properties.name === 'Mexico') return 'e'
  // Europe
  if (d.properties.name === 'Iceland') return 's'
  if (d.properties.name === 'Norway') return 's'
  if (d.properties.name === 'Sweden') return 's'
  if (d.properties.name === 'Finland') return 's'
  if (d.properties.name === 'Russia') return 'w'
  // Asia
  if (d.properties.name === 'China') return 'w'
  if (d.properties.name === 'Japan') return 's'
  // Oceania
  if (d.properties.name === 'Indonesia') return 'w'
  if (d.properties.name === 'Papua New Guinea') return 'w'
  if (d.properties.name === 'Australia') return 'w'
  if (d.properties.name === 'New Zealand') return 'w'
  // otherwise if not specified
  return 'n'
})

tipOwner.offset(function(d) {
  // [top, left]
  if (d.properties.name === 'Antarctica') return [0, 0]
  // Americas
  if (d.properties.name === 'Greenland') return [10, -10]
  if (d.properties.name === 'Canada') return [24, -28]
  if (d.properties.name === 'USA') return [-5, 8]
  if (d.properties.name === 'Mexico') return [12, 10]
  if (d.properties.name === 'Chile') return [0, -15]
  // Europe
  if (d.properties.name === 'Iceland') return [15, 0]
  if (d.properties.name === 'Norway') return [10, -28]
  if (d.properties.name === 'Sweden') return [10, -8]
  if (d.properties.name === 'Finland') return [10, 0]
  if (d.properties.name === 'France') return [-9, 66]
  if (d.properties.name === 'Italy') return [-8, -6]
  if (d.properties.name === 'Russia') return [5, 385]
  // Africa
  if (d.properties.name === 'Madagascar') return [-10, 10]
  // Asia
  if (d.properties.name === 'China') return [-16, -8]
  if (d.properties.name === 'Mongolia') return [-5, 0]
  if (d.properties.name === 'Pakistan') return [-10, 13]
  if (d.properties.name === 'India') return [-11, -18]
  if (d.properties.name === 'Nepal') return [-8, 1]
  if (d.properties.name === 'Myanmar') return [-12, 0]
  if (d.properties.name === 'Laos') return [-12, -8]
  if (d.properties.name === 'Vietnam') return [-12, -4]
  if (d.properties.name === 'Japan') return [5, 5]
  // Oceania
  if (d.properties.name === 'Indonesia') return [0, -5]
  if (d.properties.name === 'Papua New Guinea') return [-5, -10]
  if (d.properties.name === 'Australia') return [-15, 0]
  if (d.properties.name === 'New Zealand') return [-15, 0]
  // otherwise if not specified
  return [-10, 0]
})

d3.select('#s-ownership-svg').style('overflow', 'hidden')

var parentWidth = d3
  .select('#s-ownership-svg')
  .node()
  .getBoundingClientRect().width
var margin = { top: 0, right: 0, bottom: 0, left: 0 }
var width = 960 - margin.left - margin.right
var height = 500 - margin.top - margin.bottom

var color = d3
  .scaleQuantile()
  .range([
    'rgb(247,251,255)',
    'rgb(222,235,247)',
    'rgb(198,219,239)',
    'rgb(158,202,225)',
    'rgb(107,174,214)',
    'rgb(66,146,198)',
    'rgb(33,113,181)',
    'rgb(8,81,156)',
    'rgb(8,48,107)',
    'rgb(3,19,43)'
  ])

var svg = d3
  .select('#s-ownership-svg')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('class', 'map')

var projection = d3
  .geoRobinson()
  .scale(148)
  .rotate([352, 0, 0])
  .translate([width / 2, height / 2])

var path = d3.geoPath().projection(projection)

svg.call(tipOwner)

queue()
  .defer(d3.json, 'data/world_countries.json')
  .defer(d3.tsv, 'data/home-ownership-nation.tsv')
  .await(ready)

function ready(error, geography, data) {
  console.log('data', data)
  data.forEach(d => {
    console.log('d', d)
    console.log('d[colorVariable]', d[colorVariable])
    d[colorVariable] = Number(d[colorVariable].replace(',', ''))
  })

  var colorVariableValueByID = {}

  data.forEach(d => {
    colorVariableValueByID[d[geoIDVariable]] = d[colorVariable]
  })
  geography.features.forEach(d => {
    d[colorVariable] = colorVariableValueByID[d.id]
  })

  // calculate ckmeans clusters
  // then use the max value of each cluster
  // as a break
  var numberOfClasses = color.range().length - 1
  var ckmeansClusters = ss.ckmeans(
    data.map(d => d[colorVariable]),
    numberOfClasses
  )
  var ckmeansBreaks = ckmeansClusters.map(d => d3.min(d))
  console.log('numberOfClasses', numberOfClasses)
  console.log('ckmeansClusters', ckmeansClusters)
  console.log('ckmeansBreaks', ckmeansBreaks)

  // set the domain of the color scale based on our data
  color.domain(ckmeansBreaks)
  //
  // .domain(jenksNaturalBreaks)
  //
  // .domain(d3.extent(data, d => d[colorVariable]));
  //
  // .domain([
  //   10000,
  //   100000,
  //   500000,
  //   1000000,
  //   5000000,
  //   10000000,
  //   50000000,
  //   100000000,
  //   500000000,
  //   1500000000
  // ]);

  svg
    .append('g')
    .attr('class', 'countries')
    .selectAll('path')
    .data(geography.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', d => {
      if (typeof colorVariableValueByID[d.id] !== 'undefined') {
        return color(colorVariableValueByID[d.id])
      }
      return 'white'
    })
    .style('fill-opacity', 0.8)
    .style('stroke', d => {
      if (d[colorVariable] !== 0) {
        return 'white'
      }
      return 'lightgray'
    })
    .style('stroke-width', 1)
    .style('stroke-opacity', 0.5)
    // tooltipOwners
    .on('mouseover', function(d) {
      tipOwner.show(d)
      d3.select(this)
        .style('fill-opacity', 1)
        .style('stroke-opacity', 1)
        .style('stroke-width', 2)
    })
    .on('mouseout', function(d) {
      tipOwner.hide(d)
      d3.select(this)
        .style('fill-opacity', 0.8)
        .style('stroke-opacity', 0.5)
        .style('stroke-width', 1)
    })

  svg
    .append('path')
    .datum(topojson.mesh(geography.features, (a, b) => a.id !== b.id))
    .attr('class', 'names')
    .attr('d', path)
}
    //     var unemployment = d3.map();



    //     var path = d3.geoPath();



    //     var x = d3.scaleLinear()

    //     .domain([1, 10])

    //     .rangeRound([400, 645]);



    //     var color = d3.scaleThreshold()

    //     .domain(d3.range(2, 10))

    //     .range(d3.schemeBlues[9]);



    //     var g = svg.append("g")

    //     .attr("class", "key")

    //     .attr("transform", "translate(0,40)");



    //     g.selectAll("rect")

    //     .data(color.range().map(function(d) {

    //         d = color.invertExtent(d);

    //         if (d[0] == null) d[0] = x.domain()[0];

    //         if (d[1] == null) d[1] = x.domain()[1];

    //         return d;

    //     }))

    //     .enter().append("rect")

    //     .attr("height", 8)

    //     .attr("x", function(d) {

    //         return x(d[0]);

    //     })

    //     .attr("width", function(d) {

    //         return x(d[1]) - x(d[0]);

    //     })

    //     .attr("fill", function(d) {

    //         return color(d[0]);

    //     });



    //     g.append("text")

    //     .attr("class", "caption")

    //     .attr("x", x.range()[0])

    //     .attr("y", -6)

    //     .attr("fill", "#000")

    //     .attr("text-anchor", "start")

    //     .attr("font-weight", "bold")

    //     .text("UNEMPLOYMENT RATE BY COUNTY");



    //     g.call(d3.axisBottom(x)

    //         .tickSize(13)

    //         .tickFormat(function(x, i) {

    //             return i ? x : x + "%";

    //         })

    //         .tickValues(color.domain()))

    //     .select(".domain")

    //     .remove();



    //     d3.queue()

    //     .defer(d3.json, "data/us-10m.v1.json")

    //     .defer(d3.tsv, "data/unemployment.tsv", function(d) {

    //         unemployment.set(d.id, +d.rate);

    //     })

    //     .await(ready);



    //     function ready(error, us) {

    //         if (error) throw error;



    //         svg.append("g")

    //         .attr("class", "counties")

    //         .selectAll("path")

    //         .data(topojson.feature(us, us.objects.counties).features)

    //         .enter().append("path")

    //         .attr("fill", function(d) {

    //             return color(d.rate = unemployment.get(d.id));

    //         })

    //         .attr("d", path)

    //         .append("title")

    //         .text(function(d) {

    //             return d.rate + "%";

    //         });



    //         svg.append("path")

    //         .datum(topojson.mesh(us, us.objects.states, function(a, b) {

    //             return a !== b;

    //         }))

    //         .attr("class", "states")

    //         .attr("d", path);

    //     }
    }

}());