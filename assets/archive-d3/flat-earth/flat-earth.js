
    <script type="text/javascript">
    function draw(geo_data) {
      "use strict";

      var margin = 175,
        width = 1920 - margin,
        height = 1080 - margin;

      var svg = d3.select(".map")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin)
        .append('g')
        .attr('class', 'map');

      var projection = d3.geo.mercator()
        .scale(200)
        .translate([width / 2.7, height / 1.9]);

      var path = d3.geo.path().projection(projection);

      var map = svg.selectAll('path')
        .data(geo_data.features);
        
        map.enter()
        .append('path')
        .attr('d', path)
        .style('fill', 'rgb(9,157,217)')
        .style('stroke-width', 0.3)
        map.exit();
    };

  </script>