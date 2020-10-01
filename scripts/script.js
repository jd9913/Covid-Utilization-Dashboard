
function getCurrentDay() {

    const event = new Date(Date.now());
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let currentDate = event.toLocaleDateString(undefined, options);
    
    document.getElementById('currentDay').innerHTML=currentDate;
}

//place the current day/date in the header field

getCurrentDay();



function generateGraphs(){

let lineGraphLabels = ["day1", "day2", "day3", "day4", "day5"]; //x axis labels for line dataset, Dates
let lineGraphLineED = []; //line labels for ED patients line
let lineGraphLineAd = []; //line labels for Admitted patients lines
let linegraphlineInp = []; //line label for inpatients line

    let MSctx = medSurgGraphEl;
    let ICUctx = icuGraphEl;
    let Ventctx = ventGraphEl;
    let Linectx = covidLineEl;
    
//Pie Charts+95
const medSurgGraphEl = document.getElementById('medSurgBeds');  //Referencing the block for Medical Surgical bed data.
const icuGraphEl = document.getElementById('IcuBeds'); //referencing the block for ICU data
const ventGraphEl = document.getElementById('vents'); //referencing the block for ventilator data
const pieChartLabels = ["Available", "COVID-19 +", "Other"];


//Line graph

const covidLineEl = document.getElementById('covidLine'); //referencing the block for the three covid positive lines



//current date in header

 

    function getEDNumber() {
        //referencing the block for the numbers at the top
        document.getElementById('covidEDNumber').innterHTML=dataEDNumber;

        document.getElementById('covidEDNumber').removeClass();

        if (dataEDNumber > EDDataHighThreshold) {
            document.getElementById('covidEDNumber').className += "highClass";
        } else if (dataEDNumber > EDDataLowThreshold) {
            document.getElementById('covidEDNumber').className += "medClass";
        } else {

            document.getElementById('covidEDNumber').className += "lowClass";
        }
    };

    function getAdmitNumber() {
        //referencing the block for the numbers at the top
        document.getElementById('covidAdmitNumber').innterHTML=dataAdNumber;

        document.getElementById('covidAdmitNumber').removeClass();

        if (dataAdNumber > AdmitDataHighThreshold) {
            document.getElementById('covidAdmitNumber').className += "highClass";
        } else if (dataAdNumber > AdmitDataLowThreshold) {
            document.getElementById('covidAdmitNumber').className += "medClass";
        } else {

            document.getElementById('covidAdmitNumber').className += "lowClass";
        }
    };

    function getInptNumber() {
        //referencing the block for the numbers at the top
        document.getElementById('covidInptNumber').innterHTML=dataInptNumber;

        document.getElementById('covidInptNumber').removeClass();

        if (dataInptNumber > InptDataHighThreshold) {
            document.getElementById('covidInptNumber').className += "highClass";
        } else if (dataInptNumber > InptDataLowThreshold) {
            document.getElementById('covidInptNumber').className += "medClass";
        } else {

            document.getElementById('covidInptNumber').className += "lowClass";
        }
    }


    //call the functions to insert the daily number fields above the graphs

    getEDNumber();
    getAdmitNumber();
    getInptNumber();

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
        data: {
            labels: pieChartLabels,
            datasets: [{
                label: "ICU Bed Capacity Daily Snapshot",
                data: dataIcuPie,
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f"],


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
        options: options
    });

    var lineGraphTime = new Chart(Linectx, {

        type: "line",
        data: {
            labels: lineGraphLabels,

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

}



  

