//global variables for linking to webEOC data

var dataEDNumber = 521;//number of daily + patients seen in ED
var dataAdNumber = 154;// number of daily + patients admitted
var dataInpNumber = 347; //number of daily + patients as inpatients

var dataMSPie = [841, 517, 3573];   //array to hold daily data to generate pie chart for medical surgical beds
var dataICUPie = [220, 232, 628];  //array to hold daily data to generate pie chart for ICU beds
var dataVentPie = [891, 121, 323];  //array to hold daily data to generate pie chart for ventilated patients

var dataLineChartED = []; //array to hold daily data to generate line chart for ED patients 4/2020-current
var dataLineChartAd = []; //array to hold daily data to generate line chart for Admit 4/2020-current
var dataLineChartInp = []; //array to hold daily data to generate line chart for Inpatients 4/2020-current




//Pie Charts
var medSurgGraphEl = $('#medSurgBeds');  //Referencing the block for Medical Surgical bed data.
var icuGraphEl = $('#icuBeds'); //referencing the block for ICU data
var ventGraphEl = $('#vents'); //referencing the block for ventilator data
var pieChartLabels = ["Available", "COVID-19 +", "Other"];


//Line graph

var covidLineEl = document.getElementById('covidLine'); //referencing the block for the three covid positiv lines
var lineGraphLabels = []; //x axis labels for line dataset
var lineGraphLineED = []; //line labels for ED patients line
var lineGraphLineAd = []; //line labels for Admited patients lines
var linegraphlineInp = []; //line label for inpatients line

//Numbers

var covidEDEl = $('#covidEDNumber'); //referencing the block for the numbers at the top
var covidAdmitEl = ('#covidAdmitNumber'); //referencing the block for numbers at the top
var covidInptEl = ('#covidInptNumber'); //referencing the block for numbers at the top



//code to insert the daily number fields above the graphs

covidEDEl.textContext = dataEDNumber.value;
covidAdmitEl.innerHTML = dataAdNumber.value;
covidInptEl.innerHTML = dataInpNumber.value;





//4 graph data references
var MSctx = medSurgGraphEl;
var ICUctx = icuGraphEl;
var Ventctx = ventGraphEl;
var Linectx = covidLineEl;



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

// med surg graph
var medSurgGraph = new Chart(MSctx, {
    type: "pie",
    data: {
        labels: pieChartLabels,
        datasets: [{
            label: "Medical Surgical Bed Capacity Daily Snapshot",
            data: dataMSPie,
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            
        }]

    },
    options: options
});



var ICUGraph = new Chart(ICUctx, {

    // ICU bed graph
    type: "pie",
    date: {
        labels: pieChartLabels,
        datasets:[{
            label: "ICU Bed Capacity Daily Snapshot",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: dataICUPie,
            
        }]
    },
    options: options
});


// ventilated patients graph
var ventGraph = new Chart(Ventctx, {
    type: "pie",
    data: {
        labels: pieChartLabels,
        datasets: [{
            label: "Ventilated Capacity Daily Snapshot",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],
            data: dataVentPie,
            
        }]
    },
    options:options
});

var lineGraphTime = new Chart(Linectx, {

    type: "line",
    data: {
        labels: "lineGraphLabels",
        datasets: [
            {
                label: lineGraphLineED,
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: dataLineChartED
            },
            {
                label: lineGraphLineAd,
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: dataLineChartAd
            },

            {
                label: linegraphlineInp,
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: dataLineChartInp
            }]

    }

});
