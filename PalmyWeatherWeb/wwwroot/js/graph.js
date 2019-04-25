var api = "http://localhost:61480/api/values"
var weatherData;

$(function(){
    $.ajax({
        type: "GET",
        url: api,
        xhrFields: {
            withCredentials: true
        },
        success: function(data) {
            weatherData = data;
            $("body").html(data);
        }
    });

    //manually set the data since cross-origin is being a pain
    weatherData = {
    "tempInside": 19.20,
    "tempOutside": 5.10,
    "created": "2019-04-22T23:37:23"
}, {
    "tempInside": 19.00,
    "tempOutside": 4.10,
    "created": "2019-04-22T23:57:03"
}, {
    "tempInside": 20.50,
    "tempOutside": 10.20,
    "created": "2019-04-23T16:56:18"
}, {
    "tempInside": 15.50,
    "tempOutside": 5.10,
    "created": "2019-04-23T17:05:52"
}, {
    "tempInside": 15.50,
    "tempOutside": 5.10,
    "created": "2019-04-23T17:06:22"
}, {
    "tempInside": 15.50,
    "tempOutside": 5.10,
    "created": "2019-04-23T17:07:58"
}, {
    "tempInside": 15.50,
    "tempOutside": 5.10,
    "created": "2019-04-23T17:10:16"
}, {
    "tempInside": 15.50,
    "tempOutside": 5.10,
    "created": "2019-04-23T17:11:49"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T17:12:57"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T17:13:09"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T17:13:54"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T17:19:26"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T20:00:25"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T20:07:50"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T20:19:31"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.50,
    "created": "2019-04-23T20:38:14"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.00,
    "created": "2019-04-23T21:25:33"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.00,
    "created": "2019-04-23T21:26:29"
}, {
    "tempInside": 20.20,
    "tempOutside": 10.00,
    "created": "2019-04-23T21:27:11"
}, {
    "tempInside": 21.75,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:32:05"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.50,
    "created": "2019-04-23T21:32:30"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:32:56"
}, {
    "tempInside": 22.00,
    "tempOutside": 22.00,
    "created": "2019-04-23T21:33:21"
}, {
    "tempInside": 22.00,
    "tempOutside": 25.25,
    "created": "2019-04-23T21:33:46"
}, {
    "tempInside": 22.00,
    "tempOutside": 26.50,
    "created": "2019-04-23T21:34:10"
}, {
    "tempInside": 22.00,
    "tempOutside": 27.00,
    "created": "2019-04-23T21:34:36"
}, {
    "tempInside": 22.00,
    "tempOutside": 27.25,
    "created": "2019-04-23T21:35:02"
}, {
    "tempInside": 22.25,
    "tempOutside": 27.25,
    "created": "2019-04-23T21:35:28"
}, {
    "tempInside": 22.25,
    "tempOutside": 27.50,
    "created": "2019-04-23T21:35:53"
}, {
    "tempInside": 22.25,
    "tempOutside": 27.50,
    "created": "2019-04-23T21:36:18"
}, {
    "tempInside": 22.25,
    "tempOutside": 27.50,
    "created": "2019-04-23T21:36:43"
}, {
    "tempInside": 22.25,
    "tempOutside": 27.25,
    "created": "2019-04-23T21:37:10"
}, {
    "tempInside": 22.00,
    "tempOutside": 25.25,
    "created": "2019-04-23T21:37:35"
}, {
    "tempInside": 22.25,
    "tempOutside": 23.50,
    "created": "2019-04-23T21:38:00"
}, {
    "tempInside": 22.25,
    "tempOutside": 23.00,
    "created": "2019-04-23T21:38:25"
}, {
    "tempInside": 22.00,
    "tempOutside": 22.50,
    "created": "2019-04-23T21:38:50"
}, {
    "tempInside": 22.00,
    "tempOutside": 22.00,
    "created": "2019-04-23T21:39:15"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.75,
    "created": "2019-04-23T21:39:40"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.75,
    "created": "2019-04-23T21:40:06"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.75,
    "created": "2019-04-23T21:40:31"
}, {
    "tempInside": 22.25,
    "tempOutside": 21.50,
    "created": "2019-04-23T21:40:56"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.50,
    "created": "2019-04-23T21:41:21"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.50,
    "created": "2019-04-23T21:41:46"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:42:11"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:42:36"
}, {
    "tempInside": 22.25,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:43:01"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:43:27"
}, {
    "tempInside": 22.25,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:43:52"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:44:17"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:44:42"
}, {
    "tempInside": 22.25,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:45:07"
}, {
    "tempInside": 22.25,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:45:32"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:45:57"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:46:23"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:46:48"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:47:13"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:47:39"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:48:04"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:48:29"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:48:54"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:49:19"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:49:44"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:50:10"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:50:27"
}, {
    "tempInside": 22.00,
    "tempOutside": 21.25,
    "created": "2019-04-23T21:51:35"
    };

    var arr = [];
    for (var i in weatherData) {
        arr.push(
            {
                date: new Date(i.created),
                temp: i.tempInside
            });
    }
    drawChart(arr);

});

function drawChart(data) {
    var svgWidth = 600, svgHeight = 240;
    var margin = { top: 20, right: 20, bottom: 30, left: 50 };
    var width = svgWidth - margin.left - margin.right;
    var height = svgHeight - margin.top - margin.bottom;
    var svg = d3.select('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    var g = svg.append("g")
        .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")"
          );

    var x = d3.scaleTime().rangeRound([0, width]);
    var y = d3.scaleLinear().rangeRound([height, 0]);

    var line = d3.line()
        .x(function(d) { return x(d.date)})
        .y(function(d) { return y(d.temp)})
    x.domain(d3.extent(data, function(d) { return d.date }));
    y.domain(d3.extent(data, function(d) { return d.temp }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Temperature (C)");

    g.append("g")
        .call(d3.axisLeft(x))
        .append("text")
        .attr("fill", "#000")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Time");

    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 1.5)
        .attr("d", line);
}
