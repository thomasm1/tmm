(function() {

    angular.module('app')
        .controller('GlobeController', ['$q', '$log', '$state', 'd3', GlobeController]);

    function GlobeController($q, $log, $state, d3) {

        vm = this;
        vm.globe = 'GlobeController loaded';
        console.log(vm.globe);

        function draw(geo_data) {
            "use strict";
            var margin = 75,
                width = 1400 - margin,
                height = 600 - margin;

            d3.select("#globe")
                .append("h2")
                .text("World Cup");

            var gsvg = d3.select("#globe")
                .append("svg")
                .attr("width", width + margin)
                .attr("height", height + margin)
                .append('g')
                .attr('class', 'map');

            var years = [];

            for (var i = 1930; i < 2015; i += 4) {
                if (i !== 1942 && i !== 1946) {
                    years.push(i);
                };
            }

            var projection = d3.geo.mercator()
                .scale(140)
                .translate([width / 2, height / 1.2]);

            var path = d3.geo.path().projection(projection);

            var map = gsvg.selectAll('path')
                .data(geo_data.features)
                .enter()
                .append('path')
                .attr('d', path)
                .style('fill', 'lightBlue')
                .style('stroke', 'black')
                .style('stroke-width', 0.5);

            function plot_points(data) {

                function agg_year(leaves) {
                    var total = d3.sum(leaves, function(d) {
                        return d['attendance'];
                    });

                    var coords = leaves.map(function(d) {
                        return projection([+d.long, +d.lat]);
                    });

                    var center_x = d3.mean(coords, function(d) {
                        return d[0];
                    });

                    var center_y = d3.mean(coords, function(d) {
                        return d[1];
                    });

                    var teams = d3.set();

                    leaves.forEach(function(d) {
                        teams.add(d['team1']);
                        teams.add(d['team2']);
                    });

                    return {
                        'attendance': total,
                        'x': center_x,
                        'y': center_y,
                        'teams': teams.values()
                    };
                }

                var nested = d3.nest()
                    .key(function(d) {
                        return d['date'].getUTCFullYear();
                    })
                    .rollup(agg_year)
                    .entries(data);

                var attendance_max = d3.max(nested, function(d) {
                    return d.values['attendance'];
                });

                var radius = d3.scale.sqrt()
                    .domain([0, attendance_max])
                    .range([0, 15]);

                function key_func(d) {
                    return d['key'];
                }

                gsvg.append('g')
                    .attr("class", "bubble")
                    .selectAll("circle")
                    .data(nested.sort(function(a, b) {
                        return b.values['attendance'] - a.values['attendance'];
                    }), key_func)
                    .enter()
                    .append("circle")
                    .attr('cx', function(d) { return d.values['x']; })
                    .attr('cy', function(d) { return d.values['y']; })
                    .attr('r', function(d) {
                        return radius(d.values['attendance']);
                    })

                function update(year) {
                    var filtered = nested.filter(function(d) {
                        return new Date(d['key']).getUTCFullYear() === year;
                    });

                    d3.select("h2")
                        .text("World Cup " + year);

                    var circles = gsvg.selectAll('circle')
                        .data(filtered, key_func);

                    circles.exit().remove();

                    circles.enter()
                        .append("circle")
                        .transition()
                        .duration(500)
                        .attr('cx', function(d) { return d.values['x']; })
                        .attr('cy', function(d) { return d.values['y']; })
                        .attr('r', function(d) {
                            return radius(d.values['attendance']);
                        });

                    var countries = filtered[0].values['teams'];

                    function update_countries(d) {
                        if (countries.indexOf(d.properties.name) !== -1) {
                            return "lightBlue";
                        } else {
                            return 'white';
                        }
                    }

                    gsvg.selectAll('path')
                        .transition()
                        .duration(500)
                        .style('fill', update_countries)
                        .style('stroke', update_countries);

                }

                var year_idx = 0;

                var year_interval = setInterval(function() {
                    update(years[year_idx]);

                    year_idx++;

                    if (year_idx >= years.length) {
                        clearInterval(year_interval);

                        var buttons = d3.select("#globe")
                            .append("div")
                            .attr("class", "years_buttons")
                            .selectAll("div")
                            .data(years)
                            .enter()
                            .append("div")
                            .text(function(d) {
                                return d;
                            });

                        buttons.on("click", function(d) {
                            d3.select(".years_buttons")
                                .selectAll("div")
                                .transition()
                                .duration(500)
                                .style("color", "black")
                                .style("background", "rgb(251, 201, 127)");

                            d3.select(this)
                                .transition()
                                .duration(500)
                                .style("background", "lightBlue")
                                .style("color", "white");
                            update(d);
                        });
                    }
                }, 1000);
            }

            var format = d3.time.format("%d-%m-%Y (%H:%M h)");

            d3.tsv("data/world_cup_geo.tsv", function(d) {
                d['attendance'] = +d['attendance'];
                d['date'] = format.parse(d['date']);
                return d;
            }, plot_points);
        };

        d3.json("data/globe_countries.json", draw);

    }

}());