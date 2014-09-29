$(function() {
    'use strict';

    var line_chart_options = {
        scaleGridLineColor : "rgba(0,0,0,.05)",
        responsive: true
    };
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var ctx1 = $("#myChart1").get(0).getContext("2d");
    var myLineChart1 = new Chart(ctx1).Line(data, line_chart_options);

    var ctx2 = $("#myChart2").get(0).getContext("2d");
    var myLineChart2;

    $('#tab1').on('shown.bs.tab', function (e) {
        myLineChart2.destroy();
        myLineChart1 = new Chart(ctx1).Line(data, line_chart_options);
    });

    $('#tab2').on('shown.bs.tab', function (e) {
        myLineChart1.destroy();
        myLineChart2 = new Chart(ctx2).Line(data, line_chart_options);
    });
});