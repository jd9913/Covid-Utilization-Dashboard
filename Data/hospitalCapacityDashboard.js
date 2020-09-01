// Data
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var data2 = [
    {
        value: 300,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
    }
];

// Global + Custom Chart Config Options

var options = {
    bezierCurve: false,
    animation: true,
    animationEasing: "easeOutQuart",
    showScale: false,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipCornerRadius: 3,
    pointDot: true,
    pointDotRadius: 4,
    datasetFill: true,
    scaleShowLine: true,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: true
};

// Load Chart

var ctx1 = document.getElementById("covidED").getContext("2d");
var ctx = document.getElementById("covidAdmit").getContext("2d");

var myLineChart = new Chart(ctx1).Line(data, options);
// var myBarChart = new Chart(ctx).Bar(data, options);
// var myRadarChart = new Chart(ctx).Radar(data, options);
// new Chart(ctx).PolarArea(data2, options);

// For a pie chart
// var myPieChart = new Chart(ctx).Pie(data2,options);

// And for a doughnut chart
var myDoughnutChart = new Chart(ctx).Doughnut(data2, options);
